require 'play_turn_controller'
require 'rack/test'
require 'tictactoe'
require 'ostruct'
require 'board_web_presenter'

describe TTT::Web::PlayTurnController do
  let(:board) { TTT::Board.new(3) }
  let(:board_param) { TTT::Web::BoardWebPresenter.to_web_object(board) }
  include Rack::Test::Methods
  include Rack::Utils

  let(:game) { TTT::StubGame.new }
  let(:game_presenter) { OpenStruct.new }
  let(:controller) { TTT::Web::PlayTurnController.new }
  let(:board_helper) { TTT::BoardHelper.new }

  def app
    controller
  end

  it 'builds and starts game from parameters' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.game_presenter.state).to eq(TTT::Game::IN_PROGRESS)
  end

  it 'assigns board query parameter' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.next_turn_url).to include('board')
    expect(controller.next_turn_url).to include(board_param)
  end

  it 'assigns game type query parameter' do
    get('/',{'board' => board_param, 'game_type' => TTT::Game::HVH })
    expect(controller.next_turn_url).to include('game_type')
    #TODO check game type value in url is correct once we are using abbreviations
  end

  it 'state displays invalid move' do
    get('/',{'board' => board_param,
             'game_type' => TTT::Game::HVH,
              'position' => '-1'})
    expect(controller.error_message).to eq(TTT::Web::PlayTurnController::INVALID_MOVE_MESSAGE)
  end
end
