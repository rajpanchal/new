const {getUserDataById, createUserById} = require("./data.controller.js");
const router = require("express").Router();

router.get("/list/:id", getUserDataById);
router.post("/:id", createUserById);

module.exports=router;
