const { create,  getUserById } = require("./user.service.js");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

module.exports = {
  //DONE
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          status: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        status: 'Account Created'
      });
    });
  },
  getUserById:(req,res)=>{
    const body = req.body;
    getUserById(body, (err,results)=>{
      if(err){
        console.log(err);
        return;
      }
      if(results.length===0){
        return res.json({
          success:0,
          message: 'Record Not found'
        })
      }

      // console.log(body.password, results[0]['password']);
      var result = compareSync(body.password, results[0]['password']);
      // console.log(results);
      if (result) {
          loggedIn=true;
          return res.json({
            status:'success',
            userId: results[0]['id']
          })
          // console.log(results[0]['id']);
      } else {
          return res.json({
            status:'failure',
            message: 'Password Incorrect'
          })
      }

      return res.json({
        success:1,
        data:results
      })
    })
  }
};

