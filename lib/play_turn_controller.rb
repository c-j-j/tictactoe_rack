require 'rack'
require 'tictactoe'
require 'url_helper'
require 'board_web_presenter'

module TTT
  module Web
    class PlayTurnController
      include Rack::Utils

      PLAY_VIEW = File.dirname(__FILE__) + '/views/play.html.erb'
      INVALID_MOVE_MESSAGE = "Invalid move. Try again"

      attr_reader :game_presenter
      attr_reader :next_turn_url
      attr_reader :error_message

      def call(env)
        request = Rack::Request.new(env)
        game = build_game_from_params(request)
        process_turn(game, extract_position_from_param(request))
        generate_response(request, game)
      end

      def process_turn(game, played_position)
        if game.move_valid?(played_position)
          game.play_turn(played_position)
        else
          @error_message = INVALID_MOVE_MESSAGE
        end
      end

      private

      def generate_response(request, game)
        calcuate_display_fields(request, game)
        [200, {'Content-Type' => 'text/html'},
         [ERB.new(File.new(PLAY_VIEW, "r").read).result(binding) ]]
      end

      def calcuate_display_fields(request, game)
          @game_presenter = game.presenter
          @next_turn_url = TTT::Web::URLHelper.play_turn_url(extract_game_type(request), BoardWebPresenter.to_web_object(game.board))
      end

      def build_game_from_params(request)
        game_type = extract_game_type(request)
        board = BoardWebPresenter.to_board(request.params['board'])
        TTT::Game.build_game_with_board(TTT::AsyncInterface.new, game_type, board)
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
