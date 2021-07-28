const express = require("express");
const cors = require("cors")
const app = express();

const apiRouter = require('./router/router')
app.use(cors())
app.use("/api/items", apiRouter)
module.exports = app;