const {createUser,  getUserById} = require("./user.controller.js");
const router = require("express").Router();

router.post("/auth", getUserById);
//Done
router.post("/", createUser);

module.exports=router;
