const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const homeRouter = require("./routers/home");
const app = express();
const puerto = 8080;

const verificate = require("./helpers/hbs/verific");


const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: false,
  helpers: verificate,
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRouter);

app.use("/", function (req, res, next) {
  res.status(404).render("404", { layout: false });
});

app.listen(puerto);
