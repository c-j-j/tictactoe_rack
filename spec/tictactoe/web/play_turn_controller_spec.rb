require 'tictactoe/web/play_turn_controller'
require 'tictactoe/game'
require 'rack/test'

#TODO unused. to be deprecated and replaced by single controller
xdescribe TicTacToe::Web::PlayTurnController do
  include Rack::Test::Methods

  let(:play_turn_controller) { TicTacToe::Web::PlayTurnController.new }
  let(:reference_game) { TicTacToe::Game.build_game(TicTacToe::Game::HVH, 3) }

  def app
    play_turn_controller
  end

  it 'returns 200 status code' do
    call_play_turn_url
    expect(last_response.ok?).to eq(true)
  end

  it 'updates status of game' do
    call_play_turn_url
    reference_game.play_turn
    response = JSON.parse(last_response.body)
    expect(response['status']).to eq(reference_game.presenter.status)
  end

  def call_play_turn_url
    get('/play_turn',
        {TicTacToe::Web::PlayTurnController::GAME_TYPE_PARAM => TicTacToe::Game::HVH,
         TicTacToe::Web::PlayTurnController::BOARD_PARAM => reference_game.presenter.board_as_string}
       )
  end
end
