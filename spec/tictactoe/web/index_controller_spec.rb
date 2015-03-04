require 'tictactoe/game'
require 'tictactoe/web/index_controller'

describe TicTacToe::Web::IndexController do
  let(:index_controller) { TicTacToe::Web::IndexController.new }
  it 'returns 200 status code' do
    response = index_controller.call({})
    expect(response[0]).to eq(200)
  end

  it 'returns content type as html' do
    response = index_controller.call({})
    expect(response[1]).to eq({'Content-Type' => 'text/html'})
  end

  it 'returns index html with game types' do
    response = index_controller.call({})
    html_response = response[2][0]
    TicTacToe::Game::GAME_OPTIONS.each do |game_type|
      expect(html_response).to include(game_type.game_description)
      expect(html_response).to include(game_type.game_type)
    end
  end

  it 'returns index html with board sizes' do
    response = index_controller.call({})
    html_response = response[2][0]
    TicTacToe::Game::BOARD_SIZES.each do |board_size|
      expect(html_response).to include(board_size.to_s)
    end
  end
end
