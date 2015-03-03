require 'rack'
require 'tictactoe/game'
require 'tictactoe/board'
require 'tictactoe/web/url_helper'
require 'json'

module TicTacToe
  module Web
    class GamePlayController

      def play_turn(board_param, game_type, &play_game_turn)
        game = build_game_from_params(board_param, game_type)
        play_game_turn.call(game)
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

      def build_game_from_params(board_param, game_type)
        if board_param.nil?
          board = Board.new(3)
        else
          board = TicTacToe::GamePresenter.build_board_from_string(board_param)
        end
        TicTacToe::Game.build_game_with_board(game_type, board)
      end

    end
  end
end
