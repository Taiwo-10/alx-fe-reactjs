import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    
    console.log("User registered:", { username, email, password });

    
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="form-container" style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>User Registration (Controlled Form)</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Register
        </button>
      </form>
    </div>
  );
}
