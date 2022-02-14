// const express = require("express");
// const app = express();

const user = require("../db/dbuser.json");

module.exports = {
  sign(req, res) {
    const email = req.body.email;
    console.log(typeof email);
    const password = req.body.password;
    console.log(typeof user.email);

    // const indexuser = user.findIndex((x) => x.email === email);
    if (user.email !== email) {
      req.flash("danger", "Wrong Email");
      const messageData = {
        msg: req.flash("danger"),
        class: "alert-dark",
      };
      return res.render("login", {
        layout: "../views/layout/main.ejs",
        title: "Login Page",
        message: messageData,
      });
    }

    if (user.password !== password) {
      req.flash("danger", "Wrong Password");
      const messageData = {
        msg: req.flash("danger"),
        class: "alert-danger",
      };
      return res.render("login", {
        layout: "../views/layout/main.ejs",
        title: "Login Page",
        message: messageData,
      });
    }
    // return res.status(400).json({
    //   status: false,
    //   message: "Wrong password!",
    // });

    res.status(200).redirect("/api/home")
  },
  loginIndex(req, res) {
    res.render("login", {
      layout: "../views/layout/main.ejs",
      title: "Login Page",
      message: "",
    });
  },
};
