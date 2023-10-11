import { Categories } from "../../models/index.js";

const getAll = async (req, res) => {
  try {
    const data = await Categories.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

export { getAll };
