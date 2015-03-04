require 'tictactoe/web/request_controller'
require 'rack/test'

describe TicTacToe::Web::NewGameController do
  include Rack::Test::Methods

  let(:game_type) { 'HVH' }
  let(:new_game_controller) { TicTacToe::Web::RequestController.new.router}

  def app
    new_game_controller
  end

  it 'returns 200 status code' do
    get('/new_game', {'game_type' => TicTacToe::Game::HVH, 'board_size' => '3'})
    expect(last_response.ok?).to eq(true)
  end
end
