import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import notesRoute from "./routes/notesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());

app.use("/api/v1/notes", notesRoute);
app.use("/api/v1/auth", authRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
