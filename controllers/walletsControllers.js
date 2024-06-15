const {
  getAllWalletsService,
  getWalletService,
  addWalletService,
  updateWalletService,
  deleteWalletService,
} = require("../sevices/walletServices");

const getAllWallets = async (req, res, next) => {
  try {
    const allWallets = await getAllWalletsService();
    res.json(allWallets);
  } catch (error) {
    next(error);
  }
};

const getWallet = async (req, res, next) => {
  try {
    const { walletId } = req.params;
    const wallet = getWalletService(walletId);
    console.log("wallet:", wallet);
    console.log("walletId:", walletId);
    res.json(wallet);
  } catch (error) {
    next(error);
  }
};

const addWallet = async (req, res, next) => {
  try {
    const wallet = addWalletService(req.body);
    res.json(wallet);
  } catch (error) {
    next(error);
  }
};

const updateWallet = async (req, res, next) => {};

const deleteWallet = async (req, res, next) => {};

module.exports = {
  getAllWallets,
  getWallet,
  addWallet,
  updateWallet,
  deleteWallet,
};
