require 'play_turn_controller'
require 'rack/test'
require 'tictactoe'
require 'ostruct'

describe TTT::Web::PlayTurnController do
  include Rack::Test::Methods
  include Rack::Utils

  let(:game) { TTT::StubGame.new }
  let(:game_presenter) { OpenStruct.new }
  let(:controller) { TTT::Web::PlayTurnController.new }
  let(:board_param) { game.board_positions.to_json}
  let(:board_helper) { TTT::BoardHelper.new }

  def app
    controller
  end

  it 'builds game from parameters' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.game_presenter.state).to eq(TTT::Game::IN_PROGRESS)
  end

  it 'assigns board_params' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.next_turn_url).to include('board')
  end

  it 'assigns game type' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.next_turn_url).to include('game_type')
  end

  it 'state displays invalid move' do
    board = TTT::Board.new(3)
    board_helper.add_moves_to_board(board, [0], 'X')
    get('/',{'board' => board.positions.to_json,
             'game_type' => TTT::Game::HVH,
              'position' => '0'})
    expect(controller.error_message).to eq(TTT::Web::PlayTurnController::INVALID_MOVE_MESSAGE)
  end
end
