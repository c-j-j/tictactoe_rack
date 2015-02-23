require 'rack'
require 'tictactoe/game'
require 'tictactoe/board'
require 'tictactoe/web/url_helper'
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
        game = build_game_from_params(request)
        process_user_move(game, extract_position_from_param(request))
        generate_response(game)
      end

      def generate_response(game)
        game_presenter = game.presenter
        response_data = {
          'status' => game_presenter.status,
          'board_param' => game_presenter.board_as_string,
          'board' => game_presenter.board_as_array
        }
        [200, {'Content-Type' => 'text/html'},
         [JSON.generate(response_data)]]
      end

      def process_user_move(game, played_position)
        if game.move_valid?(played_position)
          game.add_move(played_position)
        end
      end

      def build_game_from_params(request)
        game_type = extract_game_type(request)
        board = TicTacToe::GamePresenter.build_board_from_string(request.params[BOARD_PARAM])
        TicTacToe::Game.build_game_with_board(game_type, board)
      end

      private

      def extract_game_type(request)
        request.params[GAME_TYPE_PARAM]
      end

      def extract_position_from_param(req)
        position = req.params[POSITION_PARAM]
        position.to_i unless position.nil?
      end

    end
  end
end
