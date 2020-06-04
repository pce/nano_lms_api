
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

#### order_by and order_direction

    curl "http://localhost:3000/api/v1/events?order_by=start&order_dir=desc" -X GET  -H "AUTH-TOKEN: <your_token>"
    {"messages":"Success","is_success":true,"data":{"events":[{"id":22,"title":"...","start":"2020-06-22T15:12:00.000Z","end":"2020-06-22T17:00:00.000Z", ...


### Update event:

    curl -d '{"start":"2019-09-10 12:00","end":"2019-09-10 13:00","title":"test123a","room":"ABC"}'  http://localhost:3000/api/v1/events/1 -X PUT \
         -H 'Content-Type: application/json' \
         -H "AUTH-TOKEN: <your_token>"


### Delete event:

    curl http://localhost:3000/api/v1/events/4 -X DELETE \
         -H "AUTH-TOKEN: <your_token>"

    curl http://localhost:3000/api/v1/events/1 -X DELETE \
         -H "AUTH-TOKEN:  QicvL88QtSay2osSUumjJFDd"


## Course (api_v1_courses)

### Create Course

    curl -d '{"title":"test123","description":"Palo santo coloring book ethical knausgaard echo park kickstarter roof party wolf taxidermy occupy seitan kombucha normcore ennui shoreditch."}' http://localhost:3000/api/v1/courses -X POST \
         -H 'Content-Type: application/json' \
         -H "AUTH-TOKEN:  <your_token>"


### Read Courses


    curl http://localhost:3000/api/v1/courses -X GET \
         -H "AUTH-TOKEN: <your_token>"

with pager:

    curl -s -i http://localhost:3000/api/v1/courses\?page\=1  \
         -H "AUTH-TOKEN: <your_token>"

   {"data":{
      "courses":[...],
      "pager":{
         "current_page":1,"next_page":null,"prev_page":null,"total_pages":1,"total_count":8
       }
     }
   }


### Read Course

    curl -s -i http://localhost:3000/api/v1/courses/2 -X GET \
         -H "AUTH-TOKEN: <your_token>"


### Update Course

    curl -d '{"title":"test-abc"}'  http://localhost:3000/api/v1/courses/1 -X PUT \
         -H 'Content-Type: application/json' \
         -H "AUTH-TOKEN: <your_token>"


### Destroy Course

    curl http://localhost:3000/api/v1/courses/1 -X DELETE \
         -H "AUTH-TOKEN: <your_token>"


