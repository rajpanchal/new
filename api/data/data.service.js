const pool = require("../../config/database.js");

module.exports = {
  getUserDataById:(data, callBack) =>{
    pool.query(`select website,email,password from user_data where id=?`,[data.id],
      (error,results,fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null,results);
      });
  },
  createUserById: (data, id, callBack) => {
    pool.query(
      `INSERT INTO user_data (id,website,email,password) VALUES (?,?,?,?);`,
      [
      	id,
      	data.website,
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
  }
};