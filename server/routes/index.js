const todoroutes = require('./todoroutes.js');
const useroutes = require('./userroutes.js');
const router = require('express').Router();

router.use("/todos", todoroutes);
router.use("/users", useroutes);

module.exports = router;