import Penghuni from "../models/penghuniModel.js";

export const getPenghuni = async (req, res) => {
  try {
    const penghuni = await Penghuni.find();
    if (penghuni.length == 0) {
      return res.send("data masih kosong");
    }
    res.json({
      status: 200,
      message: "data berhasil di dapatkan",
      data: penghuni,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};

export const getPenghuniById = async (req, res) => {
  try {
    const penghuni = await Penghuni.findById(req.params.id);
    res.json({
      status: 200,
      message: "data berhasil di ditemukan ",
      data: penghuni,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};

export const addPenghuni = async (req, res) => {
  const { name } = req.body;
  const oldName = await Penghuni.findOne({ name });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const penghuni = new Penghuni({
      name: req.body.name,
      age: req.body.age,
      kamarId: req.body.kamarId,
    });
    await penghuni.save();
    res.json({
      status: 200,
      message: "data berhasil di tambahkan",
      data: penghuni,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};

export const updatePenghuni = async (req, res) => {
  const { name } = req.body;
  const oldName = await Penghuni.findOne({ name });
  try {
    if (oldName) {
      return res.json("data sudah ada");
    }
    const updated = await Penghuni.updateOne(
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

export const deletePenghuni = async (req, res) => {
  try {
    const deleted = await Penghuni.deleteOne({ _id: req.params.id });
    res.json({
      status: 200,
      message: "data berhasil di hapus",
      data: deleted,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
};
