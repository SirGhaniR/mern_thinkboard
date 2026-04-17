import express from "express";
import notesRoute from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/v1/notes", notesRoute);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
