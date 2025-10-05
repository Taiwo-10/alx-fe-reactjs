import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-50">
        <header className="bg-orange-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">
             Recipe Sharing Platform
          </h1>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipeForm />} />
          </Routes>
        </main>

        <footer className="text-center p-4 bg-orange-100 text-gray-700 mt-10">
          © {new Date().getFullYear()} Recipe Sharing Platform
        </footer>
      </div>
    </Router>
  );
}

export default App;
