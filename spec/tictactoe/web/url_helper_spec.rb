require 'tictactoe/web/url_helper'
require 'cgi'
require 'uri'

describe TicTacToe::Web::URLHelper do
  it 'builds url string with game type parameter' do
    url = TicTacToe::Web::URLHelper.play_turn_url('some game type', '')
    params = extract_query_params(url)
    expect(params['game_type'][0]).to eq('some game type')
  end

  it 'builds url with board in string form' do
    positions = 'postions string'
    url = TicTacToe::Web::URLHelper.play_turn_url('some game type', positions)
    params = extract_query_params(url)
    expect(params['board'][0]).to eq(positions)
  end

  it 'does not add position parameter if not provided' do
    url = TicTacToe::Web::URLHelper.play_turn_url('some game type', '')
    params = extract_query_params(url)
    expect(params['position'][0]).to be(nil)
  end

  it 'does add position parameter if provided' do
    url = TicTacToe::Web::URLHelper.play_turn_url('some game type', '', 'some position')
    params = extract_query_params(url)
    expect(params['position'][0]).to eq('some position')
  end

  def extract_query_params(url)
    CGI::parse(URI.parse(url).query)
  end
end
