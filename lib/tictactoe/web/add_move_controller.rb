require 'rack'
require 'tictactoe/game'
require 'tictactoe/board'
require 'tictactoe/web/url_helper'
require 'tictactoe/web/game_play_controller'
require 'json'

module TicTacToe
  module Web

    BOARD_PARAM = 'board'
    GAME_TYPE_PARAM = 'game_type'
    POSITION_PARAM = 'position'

    class AddMoveController
      include Rack::Utils

      def call(env)
        request = Rack::Request.new(env)

        GamePlayController.new.play_turn(extract_board_param(request), extract_game_type(request)) {|game|
          process_user_move(game, extract_position(request))
        }
      end

      def process_user_move(game, played_position)
        if game.move_valid?(played_position)
          game.add_move(played_position)
        end
      end

      private

      def extract_board_param(request)
        request.params[BOARD_PARAM]
      end

      def extract_game_type(request)
        request.params[GAME_TYPE_PARAM]
      end

      def extract_position(req)
        position = req.params[POSITION_PARAM]
        position.to_i unless position.nil?
      end

    end
  end
end
