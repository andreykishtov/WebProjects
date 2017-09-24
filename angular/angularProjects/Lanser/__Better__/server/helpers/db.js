const { MONGO_URL, MONGO_URL_TEST,MONGO_URL_REAL } = require('./constants.js');

const db = () => {
    if (process.env.NODE_ENV === 'REAL') {
        return MONGO_URL_REAL;
    }
    if (process.env.NODE_ENV === 'test') {
        return MONGO_URL_TEST;
    } else {
        return MONGO_URL;
    }
};

module.exports = db();
