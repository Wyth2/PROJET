import { calculateProgress } from "../utils/functionnals.js";

export const renderProgressBars = (totals, goals) => {
  const progressBars = document.getElementById("progress-bars");
  progressBars.innerHTML = `
    ${Object.keys(goals).map((key) => {
      const progress = calculateProgress(totals[key], goals[key]);
      return `
        <div>
          <label>${key}</label>
          <progress value="${progress}" max="100"></progress>
          <span>${progress}%</span>
        </div>
      `;
    }).join("")}
  `;
};