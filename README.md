# rails-react-redux-demo

## About

This demo app presents an archiecture for building complex frontends using React + Redux + Rails.

## Getting started

Update libraries:
```
bundle && yarn
```

Start servers:
```
bin/rails server
```
```
bin/webpack-dev-server
```
or if using a process manager Overmind, simply run
```
overmind start
```

Go to http://localhost:5000/demo and http://localhost:5000/single_page_app.

## Tech stack

- React for the UI
- Redux for state manangement
- React Router for route-driven Single Page Apps
- ImmutableJS for enforcing an immutable state tree for the Redux store
- Webpacker for handling all the JS compiling (can deprecate Sprockets)
- Full integration tests via Rspec feature specs with Capybara
- JS unit testing via Ava + Enzyme + Sinon
- Easy debugging via React and Redux browser extensions
- Interactors for organizing complex business logic

## Benefits

- JS apps seamlessly coexist within the context of traditional server-rendered HTML pages; there is no one or the other – both can work depending on the situation.

- Each JS app is separated by business domain, yet retains the same code organization and structure with each other. This allows logical separation while at the same time bringing about consistency and predictability.

- Enables easy JS testing. When redux is used properly, react components become more-or-less pure functions. This results is straightforward unit testing because you don’t have to worry about side effects which may occur if your component manages its own internal state. This is a powerful test strategy when also combined with full integration tests.

- Because we’re still working in a Rails context, we also take advantage of that fact and can do things like run proper integration tests (Rspec calls this “feature specs”) in a browser environment. This brings confidence that the features we work on are all working together with the backend as expected.

- JQuery is not required; it can be dropped completely.

- Redux centralizes all application state within a single store object. This approach may be overkill for smaller apps, but is often helpful when building large apps. The patterns and predictabile nature of redux can be hepful in reducing the overhead costs of onboarding new engineers.

- React and redux come with helpful browser extensions. These tools enable you to visualize the overall structure of your application as opposed to just interpreting the DOM. Additionally, you can see how each action is dispatched based on a user’s interaction as well as explicitly see how the store’s state tree is updating in real time. This is powerful and greatly simplifies debugging.

- Setting up modern frontends powered by JS can get very complicated. This demo app removes a lot of the guesswork and offers itself as a potential solution for integrating react + redux + rails.

## Screenshots

### Traditional and react-based apps showing redux debugger
![Demo](app/assets/images/2021-05-02%2022-32-55.2021-05-02%2022_34_29.gif)

### Single page app showing redux debugger

![Spa](app/assets/images/2021-05-02%2022-23-56.2021-05-02%2022_25_20.gif)

### Redux store
![Tree](app/assets/images/Screen%20Shot%202021-05-03%20at%202.31.15%20PM.png)
![Chart](app/assets/images/Screen%20Shot%202021-05-03%20at%202.31.27%20PM.png)

### Full integration tests

![Integration](app/assets/images/Screen%20Shot%202021-05-03%20at%2011.09.56%20AM.png)

### JS unit tests

![Unit](app/assets/images/Screen%20Shot%202021-05-03%20at%207.36.01%20PM.png)


### Components debugger

![Input](app/assets/images/Screen%20Shot%202021-05-03%20at%2011.22.50%20AM.png)
