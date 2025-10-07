import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

}
