const reviewModel = require("../models/reviewModel");

async function addReview(req, res) {
    const { review_text, rating, vehicle_id } = req.body;

    if (!review_text || !rating) {
        req.flash("error", "All fields are required.");
        return res.redirect("/");
    }

    try {
        await reviewModel.addReview(review_text, rating, vehicle_id);
        req.flash("success", "Review added!");
        res.redirect("/");
    } catch (error) {
        console.error(error);
        req.flash("error", "Something went wrong.");
        res.redirect("/");
    }
}

module.exports = { addReview };