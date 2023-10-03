import { Products } from "../models/index.js";

const index = async (req, res) => {
  await Products.find()
    .then((data) => {
      data.map((item) => {
        console.log(item);
      });
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const store = async (req, res) => {
  const data = new Products({
    name: req.body.name,
    type: req.body.typeId,
    collections: req.body.collectionId,
    category: req.body.categoryid,
    price: req.body.price,
    salePrice: req.body.salePrice,
    colors: req.body.colors,
    sizes: req.body.sizes,
    media: req.body.media,
    stock: req.body.stock,
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
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const show = async (req, res) => {
  await Products.findOne({ slug: req.params.slug })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((error) => res.status(500).json({ success: true, error: error }));
};

const update = async (req, res) => {
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

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const destroy = async (req, res) => {
  await Products.findByIdAndDelete(req.params.id)
    .then(async () => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

export { index, store, show, destroy, update };
