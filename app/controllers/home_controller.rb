class HomeController < ApplicationController

  def index;
    render layout: 'without_babel'
  end

  def redux;
    render layout: 'without_babel'
  end

  def babel; end
  
end
