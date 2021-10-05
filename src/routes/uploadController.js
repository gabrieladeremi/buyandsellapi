import { Router } from "express";

import csv from "csvtojson";

const router = Router();

// eslint-disable-next-line import/prefer-default-export
router.get("/", () => {
  const fileName = "data.csv";

  // const arrayToInsert = [];

  console.log(csv().fromFile(fileName).then((source) => console.log(source)));

//   csv().fromFile(fileName).then((source) => {
//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < source.length; i++) {
//       // eslint-disable-next-line no-console
//       console.log(arrayToInsert.push(source[i]));
//     }
//   });
});

export default router;
