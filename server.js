require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add API routes
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("🌎  ==> MongoDB database connection established");
});
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
