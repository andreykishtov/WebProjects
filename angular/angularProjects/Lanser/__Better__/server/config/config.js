module.exports = {
    port: process.env.PORT || 7575,
    db:{
        database:'LanserDB',
        user: 'root' ,
        password:'andrey665' ,
        options: {
            dialect : 'mysql',
            host:'localhost',
        }
    }
}