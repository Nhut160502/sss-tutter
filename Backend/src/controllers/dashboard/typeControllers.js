import { Types } from "../../models/index.js";

const index = async (req, res) => {
  await Types.find()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
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
  try {
    const data = await Types.findById(req.params.id);

    data.name = req.body.name;
    data.status = req.body.status;

    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: err });
  }
};

const destroy = async (req, res) => {
  try {
    await Types.findByIdAndDelete(req.params.id);
    const data = await Types.find();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
  // await Types.findByIdAndDelete(req.params.id)
  //   .then(async () => {
  //     const data = await Types.find();
  //     res.status(200).json({ success: true, data: data });
  //   })
  //   .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, show, store, update, destroy };
