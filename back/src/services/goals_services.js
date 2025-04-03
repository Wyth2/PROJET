import Goal from "../models/goals_model.js";

// Récupérer tous les objectifs
export const getGoals = async () => {
  try {
    const goals = await Goal.find(); // Utilisation de Mongoose pour récupérer les données
    return goals;
  } catch (error) {
    console.error("Erreur lors de la récupération des objectifs :", error);
    throw error;
  }
};

// Définir un objectif pour un utilisateur
export const setGoal = async (goalData) => {
  try {
    // Vérifier si un objectif existe déjà pour l'utilisateur
    let goal = await Goal.findOne({ user: goalData.user });

    if (goal) {
      // Mettre à jour l'objectif existant
      goal.calories = goalData.calories;
      goal.proteines = goalData.proteines;
      goal.glucides = goalData.glucides;
      goal.lipides = goalData.lipides;
    } else {
      // Créer un nouvel objectif
      goal = new Goal(goalData);
    }

    await goal.save(); // Sauvegarde dans MongoDB
    return goal;
  } catch (error) {
    console.error("Erreur lors de la définition de l'objectif :", error);
    throw error;
  }
};