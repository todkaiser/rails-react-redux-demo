# This custom implementation is heavily inspired by https://github.com/reactjs/react-rails
# We don't use react-rails in order to have clear separation between rails and our react-redux
# based frontend. This provides more flexibility in the future event where we want to use a
# different backend (for whatever reason). Additionally, we'd have to override the react-rails
# library to handle the way we organize the various react-redux apps and how we combineReducers.
# In a nutshell - the cost of doing that versus handrolling our own just ain't worth it.
module ReactHelper
  def react_component(name, **kwargs)
    component_tag(name, **kwargs)
  end

  def redux_app(name, **kwargs)
    component_tag(name, reducer: name.camelize(:lower), **kwargs)
  end

  def component_tag(name, reducer: nil, mounting_tag: :div, mounting_class: '', **kwargs)
    content_tag(
      mounting_tag,
      '',
      data: {
        react_class: name, # This creates a `data-react-class` CSS class which is used as an entry point for rendering each component
        react_props: kwargs.merge(shared_props).to_json, # Creates `data-react-prop` as an entrypoint for any initialization data passed into the component from the page
        reducer: reducer
      },
      class: "react-component react-component-#{name.underscore.dasherize} #{mounting_class}"
    )
  end

  # These are properties that are included in ALL react-redux apps
  # Some examples include CSRF tokens, URLs, and other default properties
  # or any property really. 
  def shared_props
    {
      csrfToken: form_authenticity_token
    }
  end
end
