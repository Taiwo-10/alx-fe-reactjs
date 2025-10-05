import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Please add ingredients.";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please include at least two ingredients.";

    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("Recipe submitted:", newRecipe);

    setSuccessMessage("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg md:max-w-2xl md:p-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6 text-center">
          🍽️ Add a New Recipe
        </h2>

        {successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}

        {/* Recipe Title */}
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-orange-300"
            } md:p-4`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-orange-300"
            } md:p-4`}
            placeholder="E.g. 2 cups of flour&#10;1 tsp of salt"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-6 md:mb-8">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-orange-300"
            } md:p-4`}
            placeholder="E.g. Mix ingredients&#10;Bake for 30 minutes"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300 md:py-4 md:text-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
