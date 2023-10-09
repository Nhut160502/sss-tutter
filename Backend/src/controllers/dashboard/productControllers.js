import { Products } from "../../models/index.js";
import fs from "fs";

import "dotenv/config.js";
const index = async (req, res) => {
  try {
    const response = [];
    const data = await Products.find()
      .sort({ createdAt: "descending" })
      .populate(["type", "sizes", "colors", "category", "collections"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name", "code"])
      .populate("media.color", ["_id", "name", "code"]);

    data.map((product) =>
      product.media.map((item) => {
        item.thumbnail = `http://${process.env.HOST}:${process.env.PORT}/media/${item.thumbnail}`;
        item.gallery.forEach(
          (element, index) =>
            (item.gallery[
              index
            ] = `http://${process.env.HOST}:${process.env.PORT}/media/${element}`)
        );
      })
    );

    res.status(200).json({ success: true, total: data.length, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error, data: [] });
  }
};

const store = async (req, res) => {
  try {
    const media = [];
    const stock = [];
    const collections = req?.body?.collectionId || "";
    let i = 0;

    typeof req.body.media == "object" &&
      req.body.media.map((item) => media.push(JSON.parse(item)));
    typeof req.body.media === "string" &&
      media.push(JSON.parse(req.body.media));

    typeof req.body.stock == "object" &&
      req.body.stock.map((item) => stock.push(JSON.parse(item)));
    typeof req.body.stock == "string" && stock.push(JSON.parse(req.body.stock));

    media.map((item) => {
      item.thumbnail = req.files[i].filename;
      i++;
      item.gallery.map((_, key) => {
        item.gallery[key] = req.files[i].filename;
        i++;
      });
    });

    const data = new Products({
      media: media,
      stock: stock,
      name: req.body.name,
      desc: req.body.desc,
      type: req.body.typeId,
      price: req.body.price,
      sizes: req.body.sizes,
      colors: req.body.colors,
      barcode: req.body.barcode,
      preOrder: req.body.preOrder,
      salePrice: req.body.salePrice,
      stylePick: req.body.stylePick,
      category: req.body.categoryId,
      linkShopee: req.body.linkShopee,
      linkLazada: req.body.linkLazada,
      collections: collections,
    });

    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.files.length > 0) {
      const files = req.files;
      files.map(
        (file) =>
          fs.existsSync(`public/media/${file.filename}`) &&
          fs.unlinkSync(`public/media/${file.filename}`)
      );
    }
    return res.status(500).json({ success: false, error: error });
  }
};

const show = async (req, res) => {
  await Products.findOne({ slug: req.params.slug })
    .populate("type")
    .populate("category")
    .populate("collections")
    .populate("stock.color", ["_id", "name"])
    .populate("stock.size", ["_id", "name"])
    .populate("media.color", ["_id", "name"])
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
  try {
    const media = [];
    const stock = [];
    const oldMedia = req.body.oldMedia;
    let i = 0;

    typeof req.body.media === "object" &&
      req.body.media.map((item) => media.push(JSON.parse(item)));
    typeof req.body.media === "string" &&
      media.push(JSON.parse(req.body.media));

    typeof req.body.stock === "object" &&
      req.body.stock.map((item) => stock.push(JSON.parse(item)));
    typeof req.body.stock === "string" &&
      stock.push(JSON.parse(req.body.stock));

    media.map((item) => {
      if (typeof item.thumbnail === "string")
        item.thumbnail = item.thumbnail.split("/media/", 2)[1];
      else {
        item.thumbnail = req.files[i].filename;
        i++;
      }
      item.gallery.map((gall, key) => {
        if (typeof gall === "string")
          item.gallery[key] = gall.split("/media/", 2)[1];
        else {
          item.gallery[key] = req.files[i].filename;
          i++;
        }
      });
    });

    const data = await Products.findById(req.params.id);
    data.stock = stock;
    data.media = media;
    data.name = req.body.name;
    data.desc = req.body.desc;
    data.price = req.body.price;
    data.type = req.body.typeId;
    data.sizes = req.body.sizes;
    data.colors = req.body.colors;
    data.preOrder = req.body.preOrder;
    data.category = req.body.categoryId;
    data.stylePick = req.body.stylePick;
    data.salePrice = req.body.salePrice;
    data.linkShopee = req.body.linkShopee;
    data.linkLazada = req.body.linkLazada;
    data.collections = req.body.collectionId;
    data.updatedAt = Date.now();

    await data.save();
    if (typeof oldMedia === "string")
      fs.existsSync(`public/media/${oldMedia.split("/media/", 2)[1]}`) &&
        fs.unlinkSync(`public/media/${oldMedia.split("/media/", 2)[1]}`);
    else
      oldMedia?.map(
        (file) =>
          fs.existsSync(`public/media/${file.split("/media/", 2)[1]}`) &&
          fs.unlinkSync(`public/media/${file.split("/media/", 2)[1]}`)
      );
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.files.length > 0) {
      req.files.map((file) => {
        fs.unlinkSync(`public/media/${file.filename}`);
      });
    }
    return res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  await Products.findByIdAndDelete(req.params.id)
    .then(async (product) => {
      product.media.map((item) => {
        fs.existsSync(`public/media/${item.thumbnail}`) &&
          fs.unlinkSync(`public/media/${item.thumbnail}`);
        item.gallery.map(
          (gall) =>
            fs.existsSync(`public/media/${gall}`) &&
            fs.unlinkSync(`public/media/${gall}`)
        );
      });
      const data = await Products.find();
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ success: false, error: error });
    });
};

export { index, store, show, destroy, update };
