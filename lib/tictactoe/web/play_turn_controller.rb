require 'rack'
require 'tictactoe/game'
require 'tictactoe/web/url_helper'

module TicTacToe
  module Web
    class PlayTurnController
      include Rack::Utils

      PLAY_VIEW = File.dirname(__FILE__) + '/views/play.html.erb'
      INVALID_MOVE_MESSAGE = "Invalid move. Try again"

      attr_reader :game_presenter
      attr_reader :next_turn_url
      attr_reader :computer_has_next_turn

      def call(env)
        request = Rack::Request.new(env)
        game = build_game_from_params(request)
        play_turn(game, request)
        generate_response(request, game)
      end

      def play_turn(game, request)
        if game.current_player_is_computer?
          game.play_turn
        else
          process_user_move(game, extract_position_from_param(request))
        end
      end

      def process_user_move(game, played_position)
        if game.move_valid?(played_position)
          game.add_move(played_position)
        end
      end

      def generate_response(request, game)
        calcuate_display_fields(request, game)
        [200, {'Content-Type' => 'text/html'},
         [ERB.new(File.new(PLAY_VIEW, "r").read).result(binding) ]]
      end

      def build_game_from_params(request)
        game_type = extract_game_type(request)
        board = TicTacToe::GamePresenter.build_board_from_string(request.params['board'])
        TicTacToe::Game.build_game_with_board(game_type, board)
      end

      private

      def calcuate_display_fields(request, game)
        @game_presenter = game.presenter
        @computer_has_next_turn = game.current_player_is_computer?
        @next_turn_url = TicTacToe::Web::URLHelper.play_turn_url(extract_game_type(request), @game_presenter.board_as_string)
      end

      def extract_game_type(request)
        request.params['game_type']
      end

      def extract_position_from_param(req)
        position = req.params['position']
        position.to_i unless position.nil?
      end

    end
  end
end
