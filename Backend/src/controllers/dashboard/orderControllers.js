import { OrderDetails, Orders } from "../../models/index.js";

const index = async (req, res) => {
  Orders.find({ status: req.body.status })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const show = async (req, res) => {
  Orders.findById(req.params.id)
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const confirm = async (req, res) => {
  OrderDetails.findOneAndUpdate(
    { orderId: req.params.id },
    {
      status: 2,
    }
  )
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const shipping = async (req, res) => {
  OrderDetails.findOneAndUpdate(
    { orderId: req.params.id },
    {
      status: 3,
    }
  )
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const completed = async (req, res) => {
  OrderDetails.findOneAndUpdate(
    { orderId: req.params.id },
    {
      status: 4,
    }
  )
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const canceled = async (req, res) => {
  OrderDetails.findOneAndUpdate(
    { orderId: req.params.id },
    {
      status: 0,
      reasonCancel: req.body.reason,
    }
  )
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, show, confirm, shipping, completed, canceled };
