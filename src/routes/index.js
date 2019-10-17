const router = require("express").Router();
const {
  deleteBootcamp,
  getBootcamps,
  getBootcamp,
  postBootcamps,
  putBootcamps
} = require("../controller/bootcamps");

router
  .route("/")
  .get(getBootcamps)
  .post(postBootcamps);

router
  .route("/:id")
  .delete(deleteBootcamp)
  .put(putBootcamps)
  .get(getBootcamp);

module.exports = router;
