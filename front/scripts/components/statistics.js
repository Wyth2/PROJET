export const renderStatistics = (meals) => {
    const statsDiv = document.getElementById("statistics");
    const topMeals = meals.sort((a, b) => b.calories - a.calories).slice(0, 3);
    statsDiv.innerHTML = `
      <h2>Statistiques</h2>
      <h3>Top 3 repas les plus riches</h3>
      <ul>
        ${topMeals.map((meal) => `<li>${meal.name} - ${meal.calories} kcal</li>`).join("")}
      </ul>
    `;
  };