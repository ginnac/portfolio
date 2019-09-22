var mongoose = require("mongoose");

// refer to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NotesSchema object
var CommentSchema = new Schema({
  // `title` is of type String
  name: {
    type:String,
    required: true
  },
  // `body` is of type String
  email: {
    type:String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true
  },
  message: {
    type:String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//create model from the above schema, using mongoose's model method
var Contact = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Contact;