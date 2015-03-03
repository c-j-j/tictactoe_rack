require 'tictactoe/web/request_controller'
require 'rack/test'

describe TicTacToe::Web::NewGameController do
  include Rack::Test::Methods

  let(:game_type) { 'Human Vs Human' }
  let(:new_game_controller) { TicTacToe::Web::RequestController.new.router}

  def app
    new_game_controller
  end

  it 'returns 200 status code' do
    get('/new_game', {'game_type' => 'Human Vs Human', 'board_size' => '3'})
    expect(last_response.ok?).to eq(true)
  end

  it 'includes game type hidden in response' do
    get('/new_game', {'game_type' => TicTacToe::Game::HVH, 'board_size' => '3'})
    expect(last_response.body).to include(TicTacToe::Game::HVH)
  end

  it 'does include remote ip when set' do
    ENV[TicTacToe::Web::REMOTE_IP_ENV_VAR] = 'someRemoteIP'
    get('/new_game', {'game_type' => TicTacToe::Game::HVH, 'board_size' => '3'})
    expect(last_response.body).to include('someRemoteIP')
  end

  it 'does not include remote ip when it is null' do
    ENV[TicTacToe::Web::REMOTE_IP_ENV_VAR] = nil
    get('/new_game', {'game_type' => TicTacToe::Game::HVH, 'board_size' => '3'})
    expect(last_response.body).to_not include('localStorage')
  end
end
