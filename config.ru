use Rack::Reloader, 0
use Rack::ContentLength

$:<< File.join(File.dirname(__FILE__), 'lib')

require 'sprockets'
require 'coffee-script'
require 'tictactoe/web/request_controller'

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path('assets')
  run environment
end

map '/' do
  run TicTacToe::Web::RequestController.new.router
end



