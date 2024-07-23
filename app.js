const express = require("express");

const { walletRouter } = require("./routes/wallets");

const app = express();

app.use(express.json());
app.use("/wallets", walletRouter);

module.exports = app;
