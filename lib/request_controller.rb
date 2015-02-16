require 'rack'
require 'index_controller'
require 'new_game_controller'
require 'play_turn_controller'

module TTT
  module Web
    class RequestController

      def router
        Rack::Builder.new do
          map '/' do
            run TTT::Web::IndexController.new
          end

          map '/new_game' do
            run TTT::Web::NewGameController.new
          end

          map '/play_turn' do
            run TTT::Web::PlayTurnController.new
          end
        end
      end
    end
  end
end
