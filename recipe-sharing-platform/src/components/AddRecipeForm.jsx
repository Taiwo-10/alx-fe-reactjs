import { useState } from "react";

export default function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please enter at least two ingredients, separated by commas.");
      return;
    }

    const newRecipe = {
      id: Date.now(), // Simple ID
      title,
      summary: instructions.slice(0, 100) + "...", // Short summary
      image: "https://via.placeholder.com/150", // Placeholder
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
    };

    addRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients separated by commas"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
