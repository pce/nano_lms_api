
## User

### sign_up


    curl -XPOST -v -H 'Content-Type: application/json' http://localhost:3000/api/v1/sign_up -d '{"user": {"email": "email@example.com", "password": "admin1", "password_confirmation": "admin1"}}'

### sign_in

    curl -XPOST -v -H 'Content-Type: application/json' http://localhost:3000/api/v1/sign_in -d '{"sign_in": {"email": "email@example.com", "password": "admin1"}}'




