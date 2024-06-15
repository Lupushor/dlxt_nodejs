const { Router } = require("express");
const {
  getAllWallets,
  getWallet,
  addWallet,
  updateWallet,
  deleteWallet,
} = require("../controllers/walletsControllers");

const router = Router();

router.route("/").get(getAllWallets).post(addWallet);
router
  .route("/:walletId")
  .get(getWallet)
  .patch(updateWallet)
  .delete(deleteWallet);

// routerWallet.get('/');
// routerWallet.get('/:walletTgId');
// routerWallet.post('/');
// routerWallet.patch('/:walletTgId');
// routerWallet.delete('/:walletTgId');

module.exports = { walletRouter: router };
