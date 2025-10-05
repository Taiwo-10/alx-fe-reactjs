import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-6 italic">{recipe.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
