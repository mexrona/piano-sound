const NotesModel = require("../models/NotesModel");

class NotesController {
    async getNotes(req, res) {
        try {
            const query = NotesModel.find({});
            const result = await query;
            res.status(200).json({notes: result});
        } catch (e) {
            res.status(400).json({message: "Произошла ошибка при получении"});
            return;
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
            return;
        }
    }

    async deleteNotes(req, res) {
        try {
            if (!req.body.id) {
                res.status(400).json({
                    message: "Пожалуйста, выберите элемент для удаления",
                });
            }

            const {deletedCount} = await NotesModel.deleteOne({
                title: req.body.title,
                body: req.body.body,
                id: req.body._id,
            });

            if (deletedCount === 0) {
                res.status(400).json({
                    message:
                        "Удаление не произошло, пожалуйста, проверьте заголовок",
                });
            }

            res.status(200).json({message: "Элемент был успешно удалён"});
        } catch (e) {
            res.status(400).json({
                message: `Произошла ошибка при удалении - ${e}`,
            });
            return;
        }
    }

    async editNotes(req, res) {
        try {
            if (!req.body.newBody) {
                res.status(400).json({
                    message: "Пожалуйста, дабавьте изменения",
                });
            }

            const filter = {
                title: req.body.title,
                body: req.body.body,
                id: req.body._id,
            };
            const update = {title: req.body.newTitle, body: req.body.newBody};

            await NotesModel.findOneAndUpdate(filter, update, {new: true});

            res.status(200).json({
                message: "Элемент был успешно редактирован",
            });
        } catch (e) {
            res.status(400).json({
                message: "Произошла ошибка при редактировании",
            });
            return;
        }
    }
}

module.exports = new NotesController();
