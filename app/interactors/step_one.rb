class StepOne
  include Interactor

  def call
    context.description = 'This is some initialization data passed to the component on initial render'
    context.is_earth_flat = false
  end
end
