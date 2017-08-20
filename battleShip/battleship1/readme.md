# building Battle Ship

## Project phases

**Phase One**: create Login For User

**Phase Two**: Add login loby where each user can see each other.

**Phase Tree**: Create BattleShip Game For Each user.

**Phase Four**: Connect Two Users For A game.


### **Phase One**: create Login For User

#### Exlanation
```
time expectation 2hours.
Player can logon to the game using a nickname (no password needed)
If nickname is already used by another user online, player should chose a
different nickname.
```

#### What To Do
````
1. create user loby using div.
2. create database in Server for each user.
3. check that with diffrent usernames and see whats added and how.
````

### **Phase Two**: Add login loby where each user can see each other.

#### Exlanation
```
when connecting to loby Player can see a list of other players currently not in a game and
Player can request to play with another player from above list
```

#### What To Do
````
expected time 1 day
1. create a ui that can show users in real time.
2. create buttons check whos online, request play,
3. connect users to one another.
4. check if users are connected and check whats happens to connection when user dissconects.
5. add a button Play that works only when 2 users are ready to play.
````

### **Phase Tree**: Create BattleShip Game For Each user.

#### Exlanation
```
BattleShip game will proceed by turns, first player is selected at random by server
and all decision making is done on the server to prevent cheating.
```

#### What To Do

##### server
```
expectation 2days
0. create random board. 
1. create a connection from server to user using socet.io.
2. check that server accepts User Input by sending user mouse click.
3. connect user input with game manager using connection Manager.
4.add user to user database in usersmodel.
5. add user login in connection auth and connect it to communication Manager. 
```

##### client
```
expectation 1day
2. create a html file with canvas with a board grids with css.
3. check if user gets connected to his board.
4. make most of functions like buttons and all api on client side so i can test server side work.
5. check that every thing clicks. 
```

### **Phase Four**: Connect Two Users For A game.

#### Exlanation
```
create fully playble experience for both players with build api of battle ship.
```

#### What To Do

##### server
```
expectation 2days
1.add server routing of socket api to each user.
```

##### client
```
1.add functionality of client to recieve data from other player.
```
