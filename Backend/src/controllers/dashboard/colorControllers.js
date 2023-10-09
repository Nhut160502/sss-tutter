import { Colors } from "../../models/index.js";

const index = async (req, res) => {
  await Colors.find()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};
const store = async (req, res) => {
  const data = new Colors({
    name: req.body.name,
    code: req.body.code,
  });
  await data
    .save()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};
const show = async (req, res) => {
  await Colors.findOne({ slug: req.params.slug })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};
const update = async (req, res) => {
  try {
    const data = await Colors.findById(req.body.id);
    data.name = req.body.name;
    data.code = req.body.code;
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
const destroy = async (req, res) => {
  await Colors.findOneAndDelete(req.params.id)
    .then(async () => {
      const data = await Colors.find();
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ error: error }));
};

export { index, store, show, update, destroy };
