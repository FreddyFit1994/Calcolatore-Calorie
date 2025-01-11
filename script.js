document.getElementById("calorie-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita il refresh della pagina

  // Ottieni i dati inseriti dall'utente
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = parseFloat(document.getElementById("goal").value);

  // Formula BMR (Calcolo metabolismo basale)
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calcolo TDEE (fabbisogno giornaliero totale)
  const tdee = bmr * activity;

  // Calcolo delle calorie per l'obiettivo
  const targetCalories = tdee * goal;

  // Mostra i risultati
  const output = `Il tuo fabbisogno calorico giornaliero per l'obiettivo scelto è di circa <strong>${Math.round(targetCalories)}</strong> kcal.`;
  document.getElementById("calories-output").innerHTML = output;
});
