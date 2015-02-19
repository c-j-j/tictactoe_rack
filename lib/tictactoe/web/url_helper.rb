require 'uri'

module TicTacToe
  module Web
    class URLHelper
      def self.play_turn_url(game_type, board_positions, position=nil)
        url = "/play_turn?game_type=#{URI.escape(game_type)}&board=#{URI.escape(board_positions)}"
        url << "&position=#{position}" unless position.nil?
        url
      end
    end
  end
end
