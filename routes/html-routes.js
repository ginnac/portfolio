    var path = require("path");

    module.exports = function(app) {

        // index route loads index.html
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // portfolio route loads portfolio.html
        app.get("/portfolio", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/portfolio.html"));
        });

        // contact route loads contact.html
        app.get("/contact", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/contact.html"));
        });

        //thanks route loads thankyou.html
        app.get("/thanks", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/thankyou.html"));
        });
        
    }