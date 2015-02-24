require 'rack'
require 'tictactoe/game'
require 'tictactoe/board'
require 'tictactoe/web/url_helper'

module TicTacToe
  module Web
    REMOTE_IP_ENV_VAR = 'REMOTE_IP'
    class NewGameController
      include Rack::Utils

      NEW_GAME_VIEW = File.dirname(__FILE__) + '/views/new_game.html.erb'

      def call(env)
        req = Rack::Request.new(env)
        @game_type = extract_game_type(req)
        game = TicTacToe::Game.build_game(@game_type, extract_board_size(req))
        @game_presenter = game.presenter
        @remote_ip = ENV[REMOTE_IP_ENV_VAR]
        [200, {'Content-Type' => 'text/html'},
         [ERB.new(File.new(NEW_GAME_VIEW, "r").read).result(binding) ]]
      end

      private

      def extract_game_type(request)
        request.params['game_type']
      end

      def extract_board_size(request)
        request.params['board_size'].to_i
      end

    end
  end
end
