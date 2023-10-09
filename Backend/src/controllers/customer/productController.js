import { Products } from "../../models/index.js";
const newarrivals = async (req, res) => {
  try {
    const data = await Products.find()
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

// const weekly_best =
export { newarrivals, stylepick };
