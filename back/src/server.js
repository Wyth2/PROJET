import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js"; // Import de la connexion MongoDB

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

// Connexion à MongoDB
connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
import mealsRoutes from "./routes/meals_routes.js";
import goalsRoutes from "./routes/goals_routes.js";

app.use("/meals", mealsRoutes);
app.use("/goals", goalsRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Serveur lancé sur http://localhost:${PORT}`));