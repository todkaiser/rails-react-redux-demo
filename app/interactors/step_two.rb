class StepTwo
  include Interactor

  def call
    if context.description.blank?
      context.fail!(message: 'The description field must be set')
    end

    context.url = '/data.json'
    context.default_field = 'Change me!'
  end
end
