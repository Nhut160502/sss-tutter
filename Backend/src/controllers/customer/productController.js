import { Products } from "../../models/index.js";
import "dotenv/config.js";
const newarrivals = async (req, res) => {
  try {
    const data = await Products.find()
      .sort({ createdAt: "descending" })
      .limit(6)
      .populate(["type", "sizes", "colors", "category", "collections"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name", "code"])
      .populate("media.color", ["_id", "name", "code"]);

    data.map((product) => {
      product.media.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
        item.gallery.map(
          (gall, index) =>
            (item.gallery[
              index
            ] = `http://${process.env.HOST}:${process.env.PORT}/media/${gall}`)
        );
      });
    });

    res.status(200).json({ success: true, data: data, total: data.length });
  } catch (error) {
    res.status(500).json({ success: true, error: error });
  }
};

const stylepick = async (req, res) => {
  try {
    const data = await Products.find({ stylePick: true })
      .sort({ createdAt: "descending" })
      .limit(6)
      .populate(["type", "sizes", "colors", "category", "collections"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name", "code"])
      .populate("media.color", ["_id", "name", "code"]);

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: true, error: error });
  }
};

const bestSaller = async (req, res) => {
  try {
    const data = await Products.find()
      .limit(8)
      .populate(["type", "sizes", "colors", "category", "collections"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name", "code"])
      .populate("media.color", ["_id", "name", "code"]);

    data.map((product) => {
      product.media.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
        item.gallery.map(
          (gall, index) =>
            (item.gallery[
              index
            ] = `http://${process.env.HOST}:${process.env.PORT}/media/${gall}`)
        );
      });
    });

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, error: error });
  }
};

const show = async (req, res) => {
  try {
    const data = await Products.findOne({ slug: req.params.slug })
      .populate(["type", "sizes", "colors", "category", "collections"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name", "code"])
      .populate("media.color", ["_id", "name", "code"]);

    data.media.map((item) => {
      item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
      item.gallery.map(
        (gall, index) =>
          (item.gallery[
            index
          ] = `http://${process.env.HOST}:${process.env.PORT}/media/${gall}`)
      );
    });
    res.status(200).json({ success: true, data: data });
  } catch (error) {}
};

export { newarrivals, stylepick, bestSaller, show };
