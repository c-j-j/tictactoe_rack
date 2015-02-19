module TicTacToe
  module Web
    class StubRequest
      def initialize
        @param_map = {
          'game_type'=> 'Some Game Type'
        }
      end

      def set_params(params)
        @param_map = params
      end

      def params
        @param_map
      end
    end
  end
end
