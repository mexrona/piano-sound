const NotesModel = require("../models/NotesModel");

class NotesController {
    async getNotes(req, res) {
        try {
            const query = NotesModel.find({});
            const result = await query;
            res.status(200).json({notes: result});
        } catch (e) {
            res.status(400).json({message: "Произошла ошибка при получении"});
        }
    }

    async addNotes(req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({
                    message: "Пожалуйста, добавьте заголовок",
                });
            }

            const notesModal = new NotesModel({
                title: req.body.title,
                body: req.body.body,
            });

            await notesModal.save();

            res.status(200).json({message: "Элемент успешно добавлен"});
        } catch (e) {
            res.status(400).json({message: "Произошла ошибка при добавлении"});
        }
    }

    async deleteNotes(req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({
                    message: "Пожалуйста, укажите заголовок",
                });
            }

            await NotesModel.deleteOne({
                title: req.body.title,
                body: req.body.body,
            });

            if (deletedCount === 0) {
                res.status(400).json({
                    message:
                        "Удаление не произошло, пожалуйста, проверьте заголовок",
                });
            }

            res.status(200).json({message: "Элемент был успешно удалён"});
        } catch (e) {
            res.status(400).json({message: "Произошла ошибка при удалении"});
        }
    }

    async editNotes(req, res) {
        try {
            if (!req.body.title && !req.body.newTitle) {
                res.status(400).json({
                    message: "Пожалуйста, укажите заголовок",
                });
            }

            await NotesModel.deleteOne({
                title: req.body.title,
                body: req.body.body,
            });

            const notesModal = new NotesModel({
                title: req.body.newTitle,
                body: req.body.newBody,
            });

            await notesModal.save();

            res.status(200).json({
                message: "Элемент был успешно редактирован",
            });
        } catch (e) {
            res.status(400).json({
                message: "Произошла ошибка при редактировании",
            });
        }
    }
}

module.exports = new NotesController();
