import { Sizes } from "../models/index.js";

const index = async (req, res) => {
  await Sizes.find()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const store = async (req, res) => {
  const data = new Sizes({
    name: req.body.name,
    type: req.body.type,
  });

  await data
    .save()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const show = async (req, res) => {
  await Sizes.findOne({ slug: req.params.slug })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const update = async (req, res) => {
  try {
    const data = await Sizes.findById(req.body.id);

    data.name = req.body.name;
    data.type = req.body.type;
    data.status = req.body.status;
    data.updatedAt = Date.now();

    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  await Sizes.findByIdAndDelete(req.params.id)
    .then(async () => {
      const data = await Sizes.find();
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, store, show, update, destroy };
