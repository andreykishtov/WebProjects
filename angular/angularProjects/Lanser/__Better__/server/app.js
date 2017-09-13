const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const { sequelize } = requir('./models');
// const config = require('./config/config');
const path = require('path');
const passport = require('passport');
// const configurePassport = require('./config/passport-jwt-config');

const app = express();
app.use(passport.initialize());
// configurePassport();

app.use(morgan('dev'));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Middleware moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(cors());

// app.set('view engine', 'html');
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/job', require('./routes/job'));
app.use('/api/user', require('./routes/user'));
app.use('/api/skill', require('./routes/skill'));

// app.use('/', require('./routes/index'));
// app.use('/api', require('./routes/api/api'));
// app.use('/api/jobs', require('./routes/api/jobs-route'));
// app.use('/api/users', require('./routes/api/user-route'));

// require('./routes')(app)
// sequelize.sync()
//     .then( () => {
//         app.listen(config.port);
//         console.log('server is runing')
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    res.end(console.log(err.message));
});

app.listen(process.env.PORT || 7575);

module.exports = app;
