import { Colors, Products, Sizes } from "../models/index.js";

const index = async (req, res) => {
  await Products.find()
    .populate("type")
    .populate("category")
    .populate("sizes")
    .populate("colors")
    .populate("media.$*.colors")
    .then((data) => {
      res.status(200).json({ success: true, data: data });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

const store = async (req, res) => {
  const media = [];
  const colors = req.body.colors;
  const sizes = req.body.sizes;
  const stock = [];

  colors.map((color, key) => {
    const length = req.body.lengthGall[key];
    let thumbnail = "";
    let gallery = [];
    for (let index = 0; index < length; index++) {
      console.log(index + "", req.files[index]);
      if (index === 0) thumbnail = req.files[0].filename;
      else gallery.push(req.files[index].filename);
    }
    media.push({ colorId: color, thumbnail: thumbnail, gallery: gallery });
  });

  let key = 0;
  await colors.map(async (color) => {
    sizes.map(async (size) => {
      const colorModel = await Colors.findById(color);
      const sizeModel = await Sizes.findById(size);
      stock.push({
        colorId: colorModel,
        sizeId: sizeModel,
        qty: req.body.stock[key],
      });
      key++;
    });
  });

  const salePrice = req.body.salePrice === "undefined" ? 0 : req.body.salePrice;
  const preOrder =
    req.body.preOrder === "undefined" ? false : req.body.preOrder;
  const stylePick =
    req.body.stylePick === "undefined" ? false : req.body.stylePick;

  const data = new Products({
    name: req.body.name,
    type: req.body.typeId,
    collections: req.body.collectionId,
    category: req.body.categoryId,
    price: req.body.price,
    salePrice: salePrice,
    colors: colors,
    sizes: sizes,
    media: media,
    stock: stock,
    linkShopee: req.body.linkShopee,
    linkLazada: req.body.linkLazada,
    barcode: req.body.barcode,
    preOrder: preOrder,
    stylePick: stylePick,
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
