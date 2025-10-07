import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID from data.json
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p>Recipe not found.</p>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-6">{recipe.summary}</p>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients && recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>

      <Link
        to="/"
        className="text-blue-500 underline mt-6 inline-block"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
