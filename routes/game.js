const express = require("express");
const router = express.Router();

router.get('/game', (req, res, next)=> {
    // Rendering home.ejs page
    res.render('game',{
        layout : "../views/layout/main.ejs",
        title : "BATU GUNTING KERTAS",
        message : ""
    });
    next();
 })

 module.exports = router;