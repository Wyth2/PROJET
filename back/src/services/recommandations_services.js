import Meal from "../models/meals_model.js";

export const generateRecommendations = async (userId, goals) => {
  const meals = await Meal.find({ userId });
  const recommendations = meals.filter((meal) => {
    return (
      meal.calories <= goals.calories &&
      meal.proteins <= goals.proteins &&
      meal.carbs <= goals.carbs &&
      meal.fats <= goals.fats
    );
  });
  return recommendations;
};