import Kos from "../models/KosModels.js";

export const getKosAll = async (req, res) => {
  try {
    const kos = await Kos.find();
    res.json({ status: 200, data: kos, message: "succsees get data" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getKosById = async (req, res) => {
  try {
    const kos = await Kos.findById(req.params.id);
    res.json(kos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addKos = async (req, res) => {
  const { name } = req.body;
  const oldName = await Kos.findOne({ name });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const add = new Kos({
      name: req.body.name,
      age: req.body.age,
      kamarId: req.body.kamarId,
    });
    await add.save();
    res.json({
      data: add,
      status: 200,
      message: "data berhasil di tambahkan",
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};

export const updateKos = async (req, res) => {
  const { name } = req.body;
  const oldName = await Kos.findOne({ name });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const updated = await Kos.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json({
      status: 200,
      message: "data berhasil di update",
      data: updated,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};

export const deleteKos = async (req, res) => {
  try {
    const deleted = await Kos.deleteOne({ _id: req.params.id });
    res.json({ status: 200, data: deleted });
  } catch (error) {
    res.Json({ status: 400, data: "error" });
  }
};
