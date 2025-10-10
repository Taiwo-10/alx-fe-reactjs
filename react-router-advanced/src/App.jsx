import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Dynamic Routing for Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Route Example */}
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="/login" element={<Login />} />

        {/* Redirect all unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}


function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
