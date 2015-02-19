require 'rack'
require 'tictactoe/web/index_controller'
require 'tictactoe/web/new_game_controller'
require 'tictactoe/web/play_turn_controller'

module TicTacToe
  module Web
    class RequestController

      def router
        Rack::Builder.new do
          map '/' do
            run TicTacToe::Web::IndexController.new
          end

          map '/new_game' do
            run TicTacToe::Web::NewGameController.new
          end

          map '/play_turn' do
            run TicTacToe::Web::PlayTurnController.new
          end
        end
      end
    end
  end
end
