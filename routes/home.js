const express = require("express");
const router = express.Router();

router.get('/home', (req, res, next)=> {
    // Rendering home.ejs page
    res.render('index',{
        layout : false
    });
    next();
 })

 module.exports = router;