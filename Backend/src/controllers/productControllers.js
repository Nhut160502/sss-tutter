import { Products } from "../models/index.js";
import fs from "fs";

import "dotenv/config.js";
const index = async (req, res) => {
  await Products.find()
    .populate("type")
    .populate("sizes")
    .populate("colors")
    .populate("category")
    .populate("collections")
    .populate("stock.size", ["_id", "name"])
    .populate("stock.color", ["_id", "name", "code"])
    .populate("media.color", ["_id", "name", "code"])
    .then((data) => {
      data.map((product) => {
        product.media.map((item) => {
          item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
          item.gallery.forEach(
            (element, index) =>
              (item.gallery[
                index
              ] = `http://${process.env.HOST}:${process.env.PORT}/media/${element}`)
          );
        });
      });
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const store = async (req, res) => {
  const media = [];
  const stock = [];
  let i = 0;

  req.body.media.map((item) => media.push(JSON.parse(item)));
  req.body.stock.map((item) => stock.push(JSON.parse(item)));

  media.map((item) => {
    item.thumbnail = req.files[i].filename;
    i++;
    item.gallery.map((_, key) => {
      item.gallery[key] = req.files[i].filename;
      i++;
    });
  });

  const data = new Products({
    name: req.body.name,
    type: req.body.typeId,
    collections: req.body.collectionId,
    category: req.body.categoryId,
    price: req.body.price,
    salePrice: req.body.salePrice,
    colors: req.body.colors,
    sizes: req.body.sizes,
    media: media,
    stock: stock,
    linkShopee: req.body.linkShopee,
    linkLazada: req.body.linkLazada,
    barcode: req.body.barcode,
    preOrder: req.body.preOrder,
    stylePick: req.body.stylePick,
    desc: req.body.desc,
  });

  await data
    .save()
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => {
      if (req.files.length > 0) {
        const files = req.files;
        files.map((file) => fs.unlinkSync(`public\\media\\${file.filename}`));
      }
      console.log(error);
      return res.status(500).json({ success: false, error: error });
    });
};

const show = async (req, res) => {
  await Products.findOne({ slug: req.params.slug })
    .populate("type")
    .populate("category")
    .populate("collections")
    .populate("stock.color", ["_id", "name", "code"])
    .populate("stock.size", ["_id", "name"])
    .populate("media.color", ["_id", "name", "code"])
    .then((data) => {
      data.media.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
        item.gallery.forEach(
          (element, index) =>
            (item.gallery[
              index
            ] = `http://${process.env.HOST}:${process.env.PORT}/media/${element}`)
        );
      });
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: true, error: error }));
};

const update = async (req, res) => {
  console.log(req.body);
  const stock = [];
  req.body.stock.map((item) => stock.push(JSON.parse(item)));
  console.log(stock);
  return res.json({ success: true });

  try {
    const data = await Products.findById(req.params.id);

    data.name = req.body.name;
    data.type = req.body.typeId;
    data.collections = req.body.collectionId;
    data.category = req.body.categoryid;
    data.price = req.body.price;
    data.salePrice = req.body.salePrice;
    data.colors = req.body.colors;
    data.sizes = req.body.sizes;
    data.media = req.body.media;
    data.stock = req.body.stock;
    data.linkShopee = req.body.linkShopee;
    data.linkLazada = req.body.linkLazada;
    data.barcode = req.body.barcode;
    data.preOrder = req.body.preOrder;
    data.stylePick = req.body.stylePick;
    data.updatedAt = Date.now();

    await data.save();
    data.map((product) => {
      product.media.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
        item.gallery.forEach(
          (element, index) =>
            (item.gallery[
              index
            ] = `http://${process.env.HOST}:${process.env.PORT}/media/${element}`)
        );
      });
    });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  await Products.findByIdAndDelete(req.params.id)
    .then(async () => {
      const data = await Products.find();
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, store, show, destroy, update };
