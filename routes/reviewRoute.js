const express = require("express")
const router = new express.Router()
const reviewController = require("../controllers/reviewsController")

router.post("/add", reviewController.addReview)

router.post("/add", (req, res) => {
  console.log("ROUTE HIT")
  res.send("It works!")
})

module.exports = router