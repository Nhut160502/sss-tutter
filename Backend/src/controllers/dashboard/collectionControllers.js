import { Collections } from "../../models/index.js";
import fs from "fs";
import "dotenv/config.js";
const index = async (req, res) => {
  await Collections.find()
    .then((data) => {
      data.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
      });
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const store = async (req, res) => {
  const file = req.file;

  try {
    const data = new Collections({
      name: req.body.name,
      thumbnail: req.file.filename,
      desc: req.body.desc,
    });
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (file) {
      var filePath = `public\\media\\${req.file.filename}`;
      fs.unlinkSync(filePath);
      res.status(500).json({ success: false, error: error });
    } else {
      return res.status(500).json({ success: false, error: "No such image!" });
    }
  }
};

const show = async (req, res) => {
  await Collections.findOne({ slug: req.params.slug })
    .then((data) => {
      data.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${data.thumbnail}`;
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const update = async (req, res) => {
  try {
    const data = await Collections.findById(req.body.id);
    data.name = req.body.name;
    data.desc = req.body.desc;
    data.status = req.body.status;
    data.updatedAt = Date.now();
    if (req.file && data.thumbnail) {
      var filePath = `public\\media\\${data.thumbnail}`;
      fs.unlinkSync(filePath);
      data.thumbnail = req.file.filename;
    }
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.file) {
      var filePath = `public\\media\\${req.file.filename}`;
      fs.unlinkSync(filePath);
    }
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  Collections.findByIdAndDelete(req.params.id)
    .then(async (collection) => {
      if (collection.thumbnail) {
        var filePath = `public\\media\\${collection.thumbnail}` || null;
        fs.unlinkSync(filePath);
      }
      const data = await Collections.find();
      data.map(
        (item) =>
          (item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`)
      );
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

export { index, store, show, update, destroy };
