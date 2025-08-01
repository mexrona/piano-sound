const {Schema, model} = require("mongoose");

const NotesSchema = new Schema({
    title: {type: String, require: true},
    body: {type: String, require: true},
});

module.exports = model("Notes", NotesSchema);
