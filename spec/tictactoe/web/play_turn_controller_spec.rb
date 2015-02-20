require 'tictactoe/stubs/stub_game'
require 'tictactoe/web/play_turn_controller'
require 'tictactoe/web/stub_request'
require 'rack/test'

describe TicTacToe::Web::PlayTurnController do
  let(:request) { TicTacToe::Web::StubRequest.new }
  let(:stub_game) { TicTacToe::StubGame.new }
  let(:board) { TicTacToe::Board.new(3) }
  let(:board_param) { TicTacToe::Web::BoardWebPresenter.to_web_object(board) }
  include Rack::Test::Methods
  include Rack::Utils

  let(:game) { TicTacToe::StubGame.new }
  let(:game_presenter) { OpenStruct.new }
  let(:controller) { TicTacToe::Web::PlayTurnController.new }
  let(:board_helper) { TicTacToe::BoardHelper.new }

  def app
    controller
  end

  it 'returns 200' do
    get('/',{'board' => board_param, 'position' => '0', 'game_type' => TicTacToe::Game::HVH })
    expect(last_response.status).to eq(200)
  end

  it 'invokes play turn on game when current player is computer' do
    stub_game.set_current_player_to_computer(true)
    controller.play_turn(stub_game, nil)
    expect(stub_game.play_turn_called?).to eq(true)
  end

  it 'invokes add move when current player is human' do
    stub_game.set_current_player_to_computer(false)
    controller.play_turn(stub_game, request)
    expect(stub_game.add_move_called?).to eq(true)
  end

  it 'propogates computer having next turn to view' do
    stub_game.set_current_player_to_computer(true)
    controller.generate_response(request, stub_game)
    expect(controller.computer_has_next_turn).to eq(true)
  end

  it 'propogates computer not having next turn to view' do
    stub_game.set_current_player_to_computer(false)
    controller.generate_response(request, stub_game)
    expect(controller.computer_has_next_turn).to eq(false)
  end

  it 'builds game from parameters' do
    params = {'board' => board_param, 'game_type' => TicTacToe::Game::HVH}
    request.set_params(params)
    game = controller.build_game_from_params(request)
    expect(game).to_not be(nil)
  end

end
