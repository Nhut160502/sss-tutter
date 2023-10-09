import { Categories } from "../../models/index.js";

const index = async (req, res) => {
  await Categories.find()
    .populate("type")
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const findType = async (req, res) => {
  try {
    const data = await Categories.find({ type: req.params.id });
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const store = async (req, res) => {
  const data = new Categories({
    name: req.body.name,
    type: req.body.typeId,
  });
  await data
    .save()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const show = async (req, res) => {
  await Categories.findOne({ slug: req.params.slug })
    .populate("type")
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const update = async (req, res) => {
  try {
    const data = await Categories.findById(req.body.id);
    data.name = req.body.name;
    data.type = req.body?.typeId;
    data.status = req.body.status;
    data.updatedAt = Date.now();
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  await Categories.findByIdAndDelete(req.params.id)
    .then(async () => {
      const data = await Categories.find();
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, findType, store, show, update, destroy };
