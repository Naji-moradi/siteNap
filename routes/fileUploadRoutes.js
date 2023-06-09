const express = require("express");
const { upload } = require("../helpers/fileHelper");
const {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
  getSingle,
} = require("../controllers/fileuploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/multipleFiles", upload.array("files"), multipleFileUpload);
router.get("/getSingleFiles", getallSingleFiles);
router.get("/getMultipleFiles", getallMultipleFiles);
router.get("/getSingle/:id", getSingle);

module.exports = {
  routes: router,
};
