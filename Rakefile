require 'coffee-script'

namespace :js do
  desc "compile coffee-scripts from ./public/coffeescripts to ./public/javascripts/cs"
  task :compile do
    puts "Compiling coffeescript"
    source = "#{File.dirname(__FILE__)}/public/coffeescripts/"
    javascripts = "#{File.dirname(__FILE__)}/public/javascripts/cs/"

    Dir.foreach(source) do |cf|
      unless cf == '.' || cf == '..'
        js = CoffeeScript.compile File.read("#{source}#{cf}")
        open "#{javascripts}#{cf.gsub('.coffee', '.js')}", 'w' do |f|
          f.puts js
        end
      end
    end
  end
end

namespace :server do
  desc "run rack server with prerequisites"
  task :run do
    Rake::Task['js:compile'].invoke
    `rackup`
  end
end
