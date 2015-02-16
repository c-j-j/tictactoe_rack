#\ -w -p 8765
use Rack::Reloader, 0
use Rack::ContentLength

$:<< File.join(File.dirname(__FILE__), '../lib')

use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

require 'request_controller'

run TTT::Web::RequestController.new.router

