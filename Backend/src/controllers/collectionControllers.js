import { Collections } from "../models/index.js";

const index = async (req, res) => {
  await Collections.find()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const store = async (req, res) => {
  const data = new Collections({
    name: req.body.name,
  });
  await data
    .save()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const show = async (req, res) => {
  await Collections.findOne({ slug: req.params.slug })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const update = async (req, res) => {
  try {
    const data = await Collections.findById(req.params.id);
    data.name = req.body.name;
    data.status = req.body.status;
    data.updatedAt = Date.now();
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: err });
  }
};

const destroy = async (req, res) => {
  Collections.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

export { index, store, show, update, destroy };
