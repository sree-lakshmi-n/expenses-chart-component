`use strict`;
const spending = document.getElementsByClassName(
  "spending-weekly-distribution"
)[0];
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
days.forEach((day) => {
  const spendingDiv = document.createElement("div");
  spendingDiv.setAttribute("class", `${day}-spending`);
  const label = document.createElement("p");
  label.setAttribute("class", `${day}-spending-label`);
  spending.append(spendingDiv);
  spending.append(label);
});
