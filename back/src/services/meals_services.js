import Meal from "../models/meals_model.js";

export const calculateDailyTotals = async (userId) => {
    const meals = await Meal.find({ userId });
    const totals = meals.reduce(
      (acc, meal) => {
        acc.calories += meal.calories;
        acc.proteins += meal.proteins;
        acc.carbs += meal.carbs;
        acc.fats += meal.fats;
        return acc;
      },
      { calories: 0, proteins: 0, carbs: 0, fats: 0 }
    );
    return totals;
  };

export const getMeals = async () => {
  try {
    const meals = await Meal.find(); // Récupérer tous les repas depuis MongoDB
    return meals;
  } catch (error) {
    console.error("Erreur lors de la récupération des repas :", error);
    throw error;
  }
};

export const addMeal = async (mealData) => {
  try {
    const meal = new Meal(mealData);
    await meal.save(); // Sauvegarde dans MongoDB
    return meal;
  } catch (error) {
    console.error("Erreur lors de l'ajout du repas :", error);
    throw error;
  }
};