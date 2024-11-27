const express = require("express");
const sequelize = require("./util/database");
const cors = require("cors");

const storeRoutes = require("./routes/stores");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/stores", storeRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("database sync done");
  })
  .catch((err) => console.log(err));
app.listen(3000);
