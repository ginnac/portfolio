//require packages
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var PORT = process.env.PORT || 8085;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(logger("dev"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to mongo BD
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio" ;

mongoose.connect(MONGODB_URI);


//routes...code below

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});