FROM ruby:3.0.0

# Allow apt to work with https-based sources
RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends \
    apt-transport-https

# Ensure we install an update-to-date version of Node
# see https://github.com/yarnpkg/yarn/issues/2888
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

# Ensure latest packages for Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install packages
RUN apt-get update -yqq && \
    apt-get install -yqq --no-install-recommends \
    nodejs \
    yarn

# Setup our bundler version specifically
ENV BUNDLER_VERSION='2.2.15'
RUN gem install bundler --no-document -v '2.2.15'

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile Gemfile.lock $APP_HOME/
RUN bundle install

COPY package.json yarn.lock $APP_HOME/
RUN yarn install --check-files --frozen-lockfile

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

COPY . $APP_HOME/
