# Api Document

## Authentication
### Header
```
rest api is protected by authentication by header user needs to send user and password in header to
use put delete post.
```
### Protection Software
```
User Password Protected By Sha1.
```

## Rest-api Structure
### user
```
local:host:port/api/users
1. get: api/users gives all users
2. get: api/users/:id gives back user by id
3. post: api/users add a user using json
how to add user
    "username":"andrey",
    "email":"asdad@asda.com",
    "firstname":"Andrey",
    "lastname":"Kishtov",
    "password":"Bixox",
    "cartId":"1" 

4. delete: api/users/delete removes user by id
5. put: api/users changes user password
```

### categories
````
local:host:port/api/categories
1. get: api/categories shows all categories and how many products in them
````

### cart
```
local:host:port/api/cart
1. get: api/cart shows products in cart
```