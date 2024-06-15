const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const HttpError = require("../utils/HttpError");

// const walletPath = path.join(__dirname, "..", "db", "twallets.json");
const walletPath = path.join(process.cwd(), "db", "twallets.json");

const getAllWalletsService = async () => {
  const jsonWallet = await fs.readFile(walletPath);
  return JSON.parse(jsonWallet);
};

const getWalletService = async (id) => {
  const wallets = await getAllWalletsService();
  const wallet = wallets.find((wallet) => wallet.id === id);
  console.log(wallet);

  if (!wallet) {
    throw new HttpError(404, "This wallet id does not exist");
  }
  return wallet;
};

const addWalletService = async (body) => {
  const wallets = await getAllWalletsService();
  const newWallet = { id: crypto.randomUUID(), ...body };
  wallets.push(newWallet);
  return newWallet;
};

const updateWalletService = async () => {};

const deleteWalletService = async () => {};

module.exports = {
  getAllWalletsService,
  getWalletService,
  addWalletService,
  updateWalletService,
  deleteWalletService,
};
