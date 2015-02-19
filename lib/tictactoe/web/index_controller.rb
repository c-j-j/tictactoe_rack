require 'tictactoe/game'

module TicTacToe
  module Web
    class IndexController

      INDEX_VIEW = File.dirname(__FILE__) + '/views/index.html.erb'

      def call(env)
        game_types = TicTacToe::Game::GAME_TYPES
        board_sizes = TicTacToe::Game::BOARD_SIZES
        response = ERB.new(File.new(INDEX_VIEW, "r").read).result(binding)
        [200, {'Content-Type' => 'text/html'}, [response]]
      end
    end
  end
end
