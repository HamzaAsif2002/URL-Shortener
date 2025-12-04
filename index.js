const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const UrlRoutes = require("./routes/url");
const Port = 8001;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected:"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", UrlRoutes);

app.listen(Port, () => {
  console.log(`Server is starting at Port ${Port}`);
});
