import { useState } from "react";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);

  return (
    <div>
      <AddRecipeForm addRecipe={addRecipe} />
      <HomePage recipes={recipes} />
    </div>
  );
}

export default App;
