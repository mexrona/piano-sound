const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/notes", notesRoutes);

const VITE_API_URL = process.env.VITE_API_URL;

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);

        app.listen(VITE_API_URL, () =>
            console.log(`Server started on port - ${VITE_API_URL}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
