const express = require("express");

const { walletRouter } = require("./routes/wallets");

const app = express();

app.use("/wallets", walletRouter);

module.exports = app;
