const user =  require('../querys/user-querys');


module.exports = {
  createUser: (req, res, next) => {
  
      user.create(req ,(err, result) => {  res.json(result)});

  }
};
