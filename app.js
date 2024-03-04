const express = require("express");
const cors = require("cors");
const { homePage, clientErrorPage, serverErrorPage } = require("./controllers/app.controller");
const { studentsRoute } = require("./routes/students.route");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use("/student", studentsRoute);


app.get("/", homePage);
app.use(clientErrorPage);
app.use(serverErrorPage);

exports.app = app;