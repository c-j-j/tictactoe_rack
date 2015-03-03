require 'coffee-script'
require 'rspec/core/rake_task'
require 'open3'

namespace :js do
  desc "compile coffee-scripts from ./public/coffeescripts/src to ./public/coffeescripts/lib"
  task :compile do
    puts "Compiling coffeescript"
    source = "#{File.dirname(__FILE__)}/public/coffeescripts/src/"
    javascripts = "#{File.dirname(__FILE__)}/public/coffeescripts/lib/"

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
  desc "run rack server with javascript files"
  task :run_with_js do
    run_server
  end

  desc "run rack server with compiled coffeescript files"
  task :run_with_cs do
    ENV['USE_COFFEESCRIPT'] = true.to_s
    Rake::Task['js:compile'].invoke
    run_server
  end
end

def run_server
  port = ENV['PORT'] || 8765
  puts "Starting rack server on port #{port}"
  `rackup -p #{port}`
end

namespace :test do
  RSpec::Core::RakeTask.new(:spec)

  desc "run javascript/coffeescript with karma"
  task :karma do
    puts "Running Karma Test"
    karma_conf = 'spec/karma.conf.js'
    Open3.popen2e("karma start #{karma_conf} -no-auto-watch --single-run") do |stdin, stdout_and_stderr, wait_thr|
      puts stdout_and_stderr.gets(nil)
      raise 'Karma tests failed' unless wait_thr.value.success?
    end
  end

  desc "run all ruby and javascript tests"
  task :all => [:karma] do
    puts "Running all tests"
    Rake::Task['test:spec'].invoke
  end
end
