# The interactor gem is very useful to organize complex 
# business logic. It's similar to creating PORO for 
# service objects, except that it provides a standardized
# interface, which is helpful as the business logic of an
# application grows in complexity. The gem is particularly
# helpful when dealing with sequential logic, e.g. the workflow
# of purchasing an order. It also fully supports rollbacks, which
# is helpful dealing with side effects.
#
# https://github.com/collectiveidea/interactor
class SomeService
  include Interactor::Organizer

  organize StepOne, StepTwo
end
