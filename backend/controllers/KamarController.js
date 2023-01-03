import Kamar from "../models/KamarModel.js";
// import KosModels from "../models/KosModels.js";

export const getKamarAll = async (req, res) => {
  try {
    const room = await Kamar.find();
    res.json({ status: 200, message: "succsees get data Kamar", data: room });
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message, error: "something went wrong" });
  }
};

export const getKamarId = async (req, res) => {
  try {
    const find = await Kamar.findById(req.params.id);
    res.json({ status: 200, data: find, message: "succsees get data By Id" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addKamar = async (req, res) => {
  const oldName = await Kamar.findOne({
    noKamar: req.body.noKamar,
    kosId: req.body.kosId,
  });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const get = new Kamar({
      noKamar: req.body.noKamar,
      kosId: req.body.kosId,
    });
    const add = await get.save();
    res.json({ status: 200, data: add, message: "succsess add data" });
  } catch (error) {
    res.json({ status: 404, message: error.message });
  }
};

export const updateKamar = async (req, res) => {
  const { name } = req.body;
  const oldName = await Kamar.findOne({ name });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const updated = await Kamar.updateOne(
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

export const deleteKamar = async (req, res) => {
  try {
    const deleted = await Kamar.deleteOne({ _id: req.params.id });
    res.json({ status: 200, data: deleted, message: "succsess deleted data" });
  } catch (error) {
    res.json({
      status: 404,
      data: "error",
      message: "Something went wrong",
    });
  }
};
