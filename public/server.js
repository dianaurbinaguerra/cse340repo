/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const baseController = require("./controllers/baseController")
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const utilities = require("./utilities/index.js")
const inventoryRoute = require("./routes/inventoryRoutes")


/* ***********************
 * View Engines and Templates 
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Routes
 *************************/
// app.use(static)

app.use(express.static("public"))

// Index route
app.get("/", baseController.buildHome)
// Inventory routes
app.use("/inv", inventoryRoute)

/* ***********************
* File Not Found Route - must be last route in list
* Place after all routes
* Unite 3, Basic Error Handling Activity
**************************/
app.use(async (req,res,next) => {
  console.log("404 route triggered")   // <-- add this line
  next({ status: 404, message: "Sorry, we appear to have lost that page."})
})

/* ***********************
*Express Error Handler
* Place after all the other middleware
**************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message: err.message,
    nav
  })
})
/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})