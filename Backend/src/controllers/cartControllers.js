import { Colors, Products, Sizes } from "../models/index.js";

const index = async (req, res) => {
  const cart = req.session.Cart || [];
  try {
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(200).json({ success: false, error: error });
  }
};

const store = async (req, res) => {
  const arr = [];
  const carts = req.session.Cart || [];
  const cartId = `${req.body.productId}-${req.body.colorId}-${req.body.sizeId}`;

  try {
    const product = await Products.findById(req.body.productId);
    const color = await Colors.findById(req.body.colorId);
    const size = await Sizes.findById(req.body.sizeId);

    const exists = carts.some((cart) => {
      if (cart.cartId === cartId) {
        return true;
      }
      return false;
    });

    if (exists) {
      carts.map((cart) => {
        cart.cartId === cartId && (cart.qty = cart.qty + req.body.qty);
      });
    } else {
      const data = {
        cartId: cartId,
        product: product,
        color: color,
        size: size,
        qty: req.body.qty,
      };
      carts.map((cart) => arr.push(cart));
      arr.push(data);
      req.session.Cart = arr;
    }
    res.status(200).json({ success: true, data: req.session.Cart });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  try {
    const arr = [];
    const carts = req.session.Cart || [];
    carts.map((cart) => arr.push(cart));
    arr.filter((item) => item.cartId !== req.params.id);
    req.session.Cart = arr;
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export { index, store, destroy };
