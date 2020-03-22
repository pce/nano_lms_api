
## User

### sign_up


    curl -XPOST -v -H 'Content-Type: application/json' http://localhost:3000/api/v1/sign_up -d '{"user": {"email": "email@example.com", "password": "admin1", "password_confirmation": "admin1"}}'

### sign_in

    curl -XPOST -v -H 'Content-Type: application/json' http://localhost:3000/api/v1/sign_in -d '{"sign_in": {"email": "email@example.com", "password": "admin1"}}'

### sign_out

    curl -XDELETE -v -H 'AUTH-TOKEN: rGLxNkWxYs9rCzxzHP2E' -H 'Content-Type: application/json' http://localhost:3000/api/v1/sign_out


## Events

### Create event:

    curl -d '{"start":"2019-09-10 12:00","end":"2019-09-10 13:00","title":"test123","room":"A"}' http://localhost:3000/api/v1/events -X POST \
         -H 'Content-Type: application/json' \
         -H "AUTH-TOKEN: <your_token>"

### Read event:

    curl http://localhost:3000/api/v1/events -X GET \
         -H "AUTH-TOKEN: <your_token>"

### Update event:

    curl -d '{"start":"2019-09-10 12:00","end":"2019-09-10 13:00","title":"test123a","room":"ABC"}'  http://localhost:5050/api/v1/events/4 -X PUT \
         -H 'Content-Type: application/json' \
         -H "AUTH-TOKEN: <your_token>"

### Delete event:

    curl http://localhost:3000/api/v1/events/4 -X DELETE \
         -H "AUTH-TOKEN: <your_token>"




