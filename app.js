const express = require("express");
const app = express();
const itemRouter = require("./routes/home");
const gameRouter = require("./routes/game")
const expressLayout = require("express-ejs-layouts");
const loginRoute = require("./routes/login")
const flash = require("connect-flash")
const session = require("express-session");
const cookiParser = require("cookie-parser");
const port = 3006;

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(flash());

//terima json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookiParser("SecretApp"));
app.use(
  session({
    secret: "SecretApp",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/public", express.static("./public"));

app.use("/", function (req, res, next) {
  console.log("Time: ", Date());
  console.log("Request Type: ", req.method);
  next();
});

app.use("/auth", loginRoute);

app.use("/api", itemRouter, gameRouter);
// app.all("*", (req, res) => {
//   res.status(404).send("Not Found boy");
// });
app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});

// listen
app.listen(port, () => console.log(`listning on port ${port}`));
//
