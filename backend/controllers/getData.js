import Kamar from "../models/KamarModel.js";
import { MongoClient } from "mongodb";

export const getAllDataLeave = async (req, res) => {
  try {
    const getAll = await Kamar.aggregate([
      {
        $lookup: {
          from: "penghunis",
          localField: "_id",
          foreignField: "kamarId",
          as: "penghuni",
        },
      },
    ]);
    res
      .status(200)
      .json({ status: 200, message: "sukses mendapatkan data", data: getAll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRumahAllWithDoctersPasiens = async (req, res) => {
  try {
    const query = [
      {
        $lookup: {
          from: "kamars",
          let: {
            id: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$kosId", "$$id"],
                },
              },
            },
            {
              $lookup: {
                from: "penghunis",
                let: {
                  id: "$_id",
                },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$kamarId", "$$id"],
                      },
                    },
                  },
                ],
                as: "penghuni",
              },
            },
          ],
          as: "kamar",
        },
      },
    ];
    const client = new MongoClient("mongodb://localhost:27017");
    // const coll = client.collection("docters");
    const coll = client.db("kos_db").collection("kos");
    const aggCursor = coll.aggregate(query);
    const result = await aggCursor.toArray();
    await aggCursor.close();
    // console.log(result);

    res
      .status(200)
      .json({ status: 200, message: "sukses mendapatkan data", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
