const Items = require("../models/items");

exports.postItems = async (req, res, next) => {
  try {
    const newItem = await Items.create({ ...req.body });
    return res.status(200).json({ success: true, message: "item added" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "failed to store item in database" });
  }
};

exports.getItems = async (req, res, next) => {
  await Items.findAll()
    .then((items) => {
      return res.status(200).json(items);
    })
    .catch((err) => console.log(err));
};

exports.buyItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const number = req.params.number;
    const oldItem = await Items.findByPk(itemId);
    if (oldItem.quantity >= number) {
      oldItem.quantity = oldItem.quantity - number;
    } else {
      return res
        .status(500)
        .json({ success: false, message: "select less items" });
    }

    if (oldItem.quantity == 0) {
      await Items.destroy({ where: { id: itemId } });
    } else {
      await oldItem.save();
    }
    return res.status(200).json({ success: true, message: "item bought" });
  } catch (err) {
    console.log(err);
  }
};

exports.searchItem = async (req, res, next) => {
  const itemName = req.params.name;
  const search = await Items.findOne({
    where: {
      name: itemName,
    },
  });

  if (search) {
    return res.status(200).json(search);
  } else {
    return res.send("no items found");
  }
};
