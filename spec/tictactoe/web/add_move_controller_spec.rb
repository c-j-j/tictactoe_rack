require 'tictactoe/web/request_controller'
require 'tictactoe/stubs/stub_game'
require 'rack/test'

describe TicTacToe::Web::AddMoveController do
  let(:game_play_controller) { double('game_play_controller') }
  let(:stub_game) { TicTacToe::StubGame.new }
  let(:reference_game) { TicTacToe::Game.build_game(TicTacToe::Game::HVH, 3) }
  include Rack::Test::Methods
  include TicTacToe::Web

  let(:game_type) { 'Human Vs Human' }
  let(:add_move_controller) { TicTacToe::Web::AddMoveController.new }

  def app
    add_move_controller
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

  it 'adds move to game when move is valid' do
    add_move_controller.process_user_move(stub_game, 0)
    expect(stub_game.add_move_called?).to eq(true)
  end

  it 'does not add move to game when move is invalid' do
    stub_game.all_moves_are_invalid
    add_move_controller.process_user_move(stub_game, 0)
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
