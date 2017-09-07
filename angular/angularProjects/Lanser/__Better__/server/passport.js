const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: "thisissecrete"
};

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {});

passport.use(strategy);


module.exports = function(pasport){


    
    





}