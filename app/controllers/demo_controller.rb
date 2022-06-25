class DemoController < ApplicationController
  def index
    result = SomeService.call

    if result.success?
      @data = result
    end
  end
end
