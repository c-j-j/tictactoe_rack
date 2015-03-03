require 'tictactoe/web/game_play_controller'
require 'tictactoe/stubs/stub_game'
require 'rack/test'

describe TicTacToe::Web::GamePlayController do
  include Rack::Test::Methods
  include TicTacToe::Web

  let(:board_param) { stub_game.presenter.board_as_string }
  let(:stub_game) { TicTacToe::StubGame.new }
  let(:reference_game) { TicTacToe::Game.build_game(TicTacToe::Game::HVH, 3) }

  let(:game_type) { 'Human Vs Human' }
  let(:game_play_controller) { TicTacToe::Web::GamePlayController.new}

  it 'returns 200 status code' do
    response = game_play_controller.play_turn(board_param, TicTacToe::Game::HVH){}
    expect(response[0]).to eq(200)
  end

  it 'returns game status in json response' do
    response = game_play_controller.play_turn(board_param, TicTacToe::Game::HVH){}
    json_payload = extract_json_payload(response)
    expect(json_payload['status']).to eq(reference_game.presenter.status)
  end

  it 'returns board param in json response' do
    response = game_play_controller.play_turn(board_param, TicTacToe::Game::HVH){}
    json_payload = extract_json_payload(response)
    expect(json_payload['board_param']).to eq(reference_game.presenter.board_as_string)
  end

  it 'creates new board when no board passed in' do
    response = game_play_controller.play_turn(nil, TicTacToe::Game::HVH){}
    json_payload = extract_json_payload(response)
    expect(json_payload['board_param']).to eq(reference_game.presenter.board_as_string)
  end

  it 'returns board array in json response' do
    response = game_play_controller.play_turn(board_param, TicTacToe::Game::HVH){}
    json_payload = extract_json_payload(response)
    expect(json_payload['board'].size).to eq(9)
  end

  it 'calls play turn block with game' do
    block_called = false
    game_play_controller.play_turn(board_param, TicTacToe::Game::HVH){
      block_called = true
    }
    expect(block_called).to eq(true)
  end

  def extract_json_payload(response)
    JSON.parse(response[2][0])
  end

end
