require 'tictactoe/web/request_controller'
require 'tictactoe/stubs/stub_game'
require 'rack/test'

describe TicTacToe::Web::AddMoveController do
  let(:stub_game) { TicTacToe::StubGame.new }
  let(:controller) { TicTacToe::Web::AddMoveController.new }
  let(:reference_game) { TicTacToe::Game.build_game(TicTacToe::Game::HVH, 3) }
  include Rack::Test::Methods
  include TicTacToe::Web

  let(:game_type) { 'Human Vs Human' }
  let(:new_game_controller) { TicTacToe::Web::RequestController.new.router}

  def app
    new_game_controller
  end

  it 'returns 200 status code' do
    call_url_and_update_reference_game
    expect(last_response.ok?).to eq(true)
  end

  it 'returns game status in json response' do
    call_url_and_update_reference_game

    response = JSON.parse(last_response.body)
    expect(response['status']).to eq(reference_game.presenter.status)
  end

  it 'returns board param in json response' do
    call_url_and_update_reference_game
    response = JSON.parse(last_response.body)

    expect(response['board_param']).to eq(reference_game.presenter.board_as_string)
  end

  it 'returns board array in json response' do
    call_url_and_update_reference_game
    response = JSON.parse(last_response.body)
    expect(response['board'].size).to eq(9)
  end

  it 'adds move to game when move is valid' do
    controller.process_user_move(stub_game, 0)
    expect(stub_game.add_move_called?).to eq(true)
  end

  it 'does not add move to game when move is invalid' do
    stub_game.all_moves_are_invalid
    controller.process_user_move(stub_game, 0)
    expect(stub_game.add_move_called?).to eq(false)
  end

  def call_url_and_update_reference_game
    get('/add_move',
        {TicTacToe::Web::GAME_TYPE_PARAM => TicTacToe::Game::HVH,
         TicTacToe::Web::BOARD_PARAM => reference_game.presenter.board_as_string,
         TicTacToe::Web::POSITION_PARAM => 0}
       )
    reference_game.add_move(0)
  end

end
