const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
// to creat a cookie seassion
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// to look up for an existing user cookie seassion
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //the route that the user will be sent to after they grant permissions to our app
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id}).then(existingUser =>{
            if (existingUser){
                // we already have this doc with the given id
                done(null, existingUser);
            }else{
                // its a new user make a new doc
                new User({ googleID: profile.id }).save()
                .then(user => done(null, user));
            }
        })
    }
  )
);