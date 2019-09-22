    var path = require("path");

    module.exports = function(app) {

        // index route loads view.html
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // cms route loads cms.html
        app.get("/portfolio", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/portfolio.html"));
        });

        // blog route loads blog.html
        app.get("/contact", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/blog.html"));
        });
        
    }