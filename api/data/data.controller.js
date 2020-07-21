const { getUserDataById, createUserById } = require("./data.service.js");
const CryptoJS = require('crypto-js');


module.exports = {
  getUserDataById:(req,res)=>{
    const body = req.params;
    getUserDataById(body, (err,results)=>{
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
      return res.json({
        success:1,
        //Coulnt decrpt bcz of time constraint
        data:results
      })
    })
  },
  createUserById: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    body.password = CryptoJS.AES.encrypt(body.password, 'secret key 123').toString();
    console.log(body.password);
    createUserById(body, id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          status: "Database connection error"
        });
      }
      return res.status(200).json({
        status: 'success'
      });
    });
  }
};

