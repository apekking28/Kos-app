import express from "express";
import {
  getKosAll,
  getKosById,
  addKos,
  updateKos,
  deleteKos,
} from "../controllers/KosController.js";
import {
  getKamarAll,
  getKamarId,
  addKamar,
  updateKamar,
  deleteKamar,
} from "../controllers/KamarController.js";
import {
  getPenghuni,
  getPenghuniById,
  addPenghuni,
  updatePenghuni,
  deletePenghuni,
} from "../controllers/penghuniController.js";

import {
  getAllDataLeave,
  getRumahAllWithDoctersPasiens,
} from "../controllers/getData.js";

const router = express.Router();

///////////////////////////////////////////////////////////

// Home
router.get("/", (req, res) => {
  res.json("Hello Welcome To Kos App");
});

////////////////////////////////////////////////////////////

// get all kos
router.get("/kos", getKosAll);
// get kos by id
router.get("/kos/:id", getKosById);
// add kos
router.post("/kos", addKos);
// update kos
router.put("/kos/:id", updateKos);
// delete kos
router.delete("/kos/:id", deleteKos);

/////////////////////////////////////////////////////////////

// get all kamar
router.get("/kamar", getKamarAll);
//get kamar by id
router.get("/kamar/:id", getKamarId);
// add kamar
router.post("/kamar", addKamar);
// update kamar
router.put("/kamar/:id", updateKamar);
// delete kamar
router.delete("/kamar/:id", deleteKamar);

//////////////////////////////////////////////////////////////

// get all penghuni
router.get("/penghuni", getPenghuni);
// get penghuni by id
router.get("/penghuni/:id", getPenghuniById);
// add penghuni
router.post("/penghuni", addPenghuni);
// update penghuni
router.put("/penghuni/:id", updatePenghuni);
// hapus penghuni
router.delete("/penghuni/:id", deletePenghuni);

////////////////////////////////////////////////////////////////

// get query kamar with penghuni
router.get("/kamarQuery", getAllDataLeave);
// get qurery kos with kamar and penghuni
router.get("/kosQuery", getRumahAllWithDoctersPasiens);

export default router;
