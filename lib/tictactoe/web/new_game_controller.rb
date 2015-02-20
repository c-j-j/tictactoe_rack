require 'rack'
require 'tictactoe/game'
require 'tictactoe/board'
require 'tictactoe/web/url_helper'

module TicTacToe
  module Web
    class NewGameController
      include Rack::Utils

      def call(env)
        req = Rack::Request.new(env)
        game_type = extract_game_type(req)
        game = TicTacToe::Game.build_game(game_type, extract_board_size(req))
        redirect_to_play_turn_page(game.presenter.board_as_string, game_type)
      end

      private

      def redirect_to_play_turn_page(board_positions, game_type)
        response = Rack::Response.new
        response.redirect(TicTacToe::Web::URLHelper.play_turn_url(game_type, board_positions))
        response.finish
      end

      def extract_game_type(request)
        request.params['game_type']
      end

      def extract_board_size(request)
        request.params['board_size'].to_i
      end

    end
  end
end
