import { Types } from "../models/index.js";

const index = async (req, res) => {
  await Types.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

const store = async (req, res) => {
  const data = new Types({
    name: req.body.name,
  });
  await data
    .save()
    .then((type) =>
      res.status(200).json({
        success: true,
        data: type,
      })
    )
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
};

const show = async (req, res) => {
  await Types.findOne({ slug: req.params.slug })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const update = async (req, res) => {
  await Types.findById(req.params.id)
    .then(async (type) => {
      type.name = req.body.name;
      type.status = req.body.status;
      await type
        .save()
        .then((data) => res.status(200).json({ success: true, data: data }))
        .catch((err) => res.status(500).json({ success: false, error: err }));
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const destroy = async (req, res) => {
  await Types.findById(req.params.id)
    .then((data) => {
      data
        .deleteOne()
        .then(() => res.status(200).json({ success: true }))
        .catch((err) => res.status(500).json({ success: false, error: err }));
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

export { index, show, store, update, destroy };
