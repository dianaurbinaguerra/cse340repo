// const utilities = require("../utilities")
// const baseController = {}
// const reviewModel = require("../models/reviewModel");

// /* ***************************
//  *  Build Home view with MVC
//  *  Unit 3, MVC: Get Started Activity
//  *  Flash message Unit 4, Sessions & Messages activity
//  * ************************** */
// baseController.buildHome = async function (req, res) {
//   const nav = await utilities.getNav()
//   // req.flash("notice", "This is a flash message.")
//   res.render("index", { title: "Home", nav })
// }


// async function buildHome(req, res) {
//     try {
//         const reviewData = await reviewModel.getReviewsByVehicle(1);

//         res.render("index", {
//             title: "Home",
//             reviews: reviewData.rows
//         });
//     } catch (error) {
//         console.error(error);
//         res.render("index", {
//             title: "Home",
//             reviews: []
//         });
//     }
// }

// module.exports = baseController



const utilities = require("../utilities")
const baseController = {}
const reviewModel = require("../models/reviewModel")

/* ***************************
 *  Build Home view with reviews
 * ************************** */
baseController.buildHome = async function (req, res) {
  const nav = await utilities.getNav()

  try {
    const reviewData = await reviewModel.getReviewsByVehicle(1)

    res.render("index", {
      title: "Home",
      nav,
      reviews: reviewData // ✅ correct if your model returns rows
    })
  } catch (error) {
    console.error(error)

    res.render("index", {
      title: "Home",
      nav,
      reviews: [] // ✅ prevents crash
    })
  }
}

module.exports = baseController