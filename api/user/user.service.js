const pool = require("../../config/database.js");

module.exports = {
	//DONE
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO user_logs (email,password) VALUES (?,?);`,
      [
        data.email,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getUserById:(data, callBack) =>{
    pool.query(`select id,password from user_logs where email=?`,[data.email],
      (error,results,fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null,results);
      });
  }
};