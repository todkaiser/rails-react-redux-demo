class DataController < ApplicationController
  def index
    sleep 1.5

    @data = {
      numbers: [1,2,3,4,5,6,7,8]
    }

    respond_to do |format|
      format.json { render json: @data }
    end
  end
end
