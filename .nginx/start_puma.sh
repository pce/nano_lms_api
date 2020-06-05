#!/bin/bash

# sed $user

cd /home/$user/rails/nano_lms_api

bundle exec puma -b unix:///home/$user/rails/nano_lms_api/puma.sock
