require 'tictactoe/web/new_game_controller'
require 'rack/test'

describe TicTacToe::Web::NewGameController do
  include Rack::Test::Methods

  let(:game_type) { 'Human Vs Human' }
  let(:new_game_controller) { TicTacToe::Web::NewGameController.new}

  def app
    new_game_controller
  end

  it 'redirects to play turn controller' do
    get('/', {'game_type' => 'Human Vs Human', 'board_size' => '3'})
    follow_redirect!
    expect(last_request.url).to include('play_turn')
    expect(last_response.status).to eq(302)
  end

  it 'adds game type in redirect url' do
    get('/', {'game_type' => game_type, 'board_size' => '3'})
    follow_redirect!
    expect(last_request.params['game_type']).to eq(game_type)
  end

  it 'adds empty board to redirect url' do
    get('/', {'game_type' => game_type, 'board_size' => '3'})
    follow_redirect!
    board = TicTacToe::Web::BoardWebPresenter.to_board(last_request.params['board'])
    expect(board.empty_positions.size).to eq(9)
  end
end
