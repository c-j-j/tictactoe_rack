require 'rack'
require 'tictactoe/web/game_play_controller'

module TicTacToe
  module Web
    class PlayTurnController
      include Rack::Utils

      BOARD_PARAM = 'board'
      GAME_TYPE_PARAM = 'game_type'

      def call(env)
        request = Rack::Request.new(env)
        GamePlayController.new.play_turn(extract_board_param(request), extract_game_type(request)) {|game|
          game.play_turn
        }
      end

      private

      def extract_board_param(request)
        request.params[BOARD_PARAM]
      end

      def extract_game_type(request)
        request.params[GAME_TYPE_PARAM]
      end
    end
  end
end
