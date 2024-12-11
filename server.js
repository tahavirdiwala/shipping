const express = require("express");
const connectDb = require("./database/connect");
const routes = require("./routes");
const EnvironmentMapper = require("./lib/env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);
start();

async function start() {
  try {
    await connectDb(EnvironmentMapper.MongoUri).then(() => {
      console.log("database connected");
    });
    app.listen(EnvironmentMapper.Port, () => {
      console.log("server is running at port " + EnvironmentMapper.Port);
    });
  } catch (error) {
    console.log(error);
  }
}
