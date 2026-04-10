const pool = require("../database/");

async function getReview() {
  return await pool.query(
    "SELECT * FROM public.reviews"
  )
}

async function addReview(review_text, rating, vehicle_id) {
  try {
    const sql = "INSERT INTO public.reviews (review_text, rating, vehicle_id) VALUES ($1, $2, $3) RETURNING *"
    return await pool.query(sql, [review_text, rating, vehicle_id])
  } catch (error) {
    return error.message
  }
}

async function getReviewsByVehicle(vehicle_id) {
  try {
    const sql = "SELECT * FROM public.reviews WHERE vehicle_id = $1 ORDER BY created_at DESC"
    const data = await pool.query(sql, [vehicle_id])
    return data.rows
  } catch (error) {
    return error.message
  }
}
module.exports = { addReview, getReviewsByVehicle };