const {Router} = require("express");
const notesController = require("../controllers/notesController");

const notesRoutes = new Router();

notesRoutes.get("/list", notesController.getNotes);
notesRoutes.post("/add", notesController.addNotes);
notesRoutes.delete("/delete", notesController.deleteNotes);
notesRoutes.put("/edit", notesController.editNotes);

module.exports = notesRoutes;
