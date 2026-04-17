const utilities = require("../utilities")
const baseController = {}
const reviewModel = require("../models/reviewModel")

baseController.buildHome = async function (req, res) {
  const nav = await utilities.getNav()

  try {
    const reviewData = await reviewModel.getReviewsByVehicle(1)

    res.render("index", {
      title: "Home",
      nav,
      reviews: reviewData 
    })
  } catch (error) {
    console.error(error)

    res.render("index", {
      title: "Home",
      nav,
      reviews: [] 
    })
  }
}

module.exports = baseController