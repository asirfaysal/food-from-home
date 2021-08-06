import React, { useState } from "react"
import MealList from "./MealList"

function App() {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=c3fcfcb04efd479b93e8bdd5e680b8de&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error")
    })
  }

  function handleChange(e) {
    setCalories(e.target.value)
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Meals</button>
      </section>
      
      {mealData && <MealList mealData={mealData} />}
    </div>
  )
}

export default App;
