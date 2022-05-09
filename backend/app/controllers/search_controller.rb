class SearchController < ApplicationController
  def search
    @robots = Robot.search_by_term(params[:query])
    render json: @robots
  end
end