#\ -w -p 8765
use Rack::Reloader, 0
use Rack::ContentLength

$:<< File.join(File.dirname(__FILE__), '../lib')

use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

require 'tictactoe/web/request_controller'

run TicTacToe::Web::RequestController.new.router

