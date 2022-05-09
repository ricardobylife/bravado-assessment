FROM ruby:3.1.1

RUN apt-get update -qq && apt-get install -y postgresql-client
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /app

COPY Gemfil* ./
RUN bundle install

COPY . .

ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 3100

# Start the main process.
CMD ["rails", "server", "-p", "3100", "-b", "0.0.0.0"]