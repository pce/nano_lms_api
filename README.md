# README

Note: the Frontend is as a static build under public 

This can be simplified by running the api-server under a subdomain (cors).


## Install

Ruby 2.6.3, Rails 6

- optional: rvm 
- `bundle install`
- Database `config/database.yml` 
    - `rails db:create` -> creates databases 'nano_lms_api_development' and test
    - `rails db:migrate` -> creates tables 'nano_lms_api_development'


Create a user: `User.create! email: 'admin@example.com', password: 'abc234!', username: 'admin'`

* How to run the test suite

##  Services 

Currently no job queues, cache servers, search engines, etc.
weekly good habbits:

- `bundle outdated`
- `bundle update`

## Deployment instructions

Git Deployment 






