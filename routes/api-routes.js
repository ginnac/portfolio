var db = require("../models");

    module.exports = function(app) {

        app.post("/api/submit", function(req, res) {
            // Create a new contact request and pass the req.body to the entry
            
            db.Contact.create(req.body).then(function(dbContact) {
                    // View the added result in the console
                    console.log("created new document: ")
                    console.log(dbContact);
                    res.json(dbContact);
                    })
                    .catch(function(err) {
                    // If an error occurred, log it
                    console.log(err);
                    });
          });
    }