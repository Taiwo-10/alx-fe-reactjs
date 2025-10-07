import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-4">{recipe.summary}</p>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </div>
    </div>
  );
}
