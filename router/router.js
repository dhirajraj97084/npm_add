const express=require("express");
const router=express.Router();
const {home,signup,login}=require('../controller/auth-controller');

router.route("/").get(home);
router.route("/signup").post(signup);
router.route("/login").get(login);

module.exports=router;