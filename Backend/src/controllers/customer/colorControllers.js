import { Colors } from "../../models/index.js";

const getList = async (req, res) => {
  try {
    const data = await Colors.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

export { getList };
