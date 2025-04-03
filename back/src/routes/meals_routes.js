import express from "express";
import Meal from "../models/meals_model.js";
import { calculateDailyTotals } from "../services/meals_services.js";
import { generateRecommendations } from "../services/recommandations_services.js";


const mealsRoutes = express.Router();

// 🔹 Ajouter un repas
mealsRoutes.post("/", async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Récupérer tous les repas
mealsRoutes.get("/", async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mealsRoutes.get("/recommendations", async (req, res) => {
    const goals = req.body; // Objectifs nutritionnels envoyés dans le corps de la requête
    const recommendations = await generateRecommendations(goals);
    res.json(recommendations);
  });
  
  mealsRoutes.get("/totals", async (req, res) => {
    const totals = await calculateDailyTotals(req.user.id);
    res.json(totals);
  });
export default mealsRoutes;