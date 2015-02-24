require 'rack'
require 'tictactoe/web/index_controller'
require 'tictactoe/web/new_game_controller'
require 'tictactoe/web/add_move_controller'
require 'tictactoe/web/game_play_controller'

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

          map '/add_move' do
            run TicTacToe::Web::AddMoveController.new
          end
        end
      end
    end
  end
end
