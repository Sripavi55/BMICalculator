import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setError("");
    setMessage("");

    if (isLogin) {
      if (!form.email || !form.password) {
        setError("All fields are required.");
        return;
      }
      setMessage("Login Successful 🎉");
    } else {
      if (!form.name || !form.email || !form.password || !form.confirmPassword) {
        setError("All fields are required.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setMessage("Sign Up Successful 🎉");
    }

    // Clear form
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-[400px] transition-all duration-300">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />

        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition duration-300"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {message && (
          <p className="text-green-600 text-center mt-4 font-semibold">
            {message}
          </p>
        )}

        <p
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
            setMessage("");
          }}
          className="text-center mt-6 text-indigo-600 cursor-pointer font-medium hover:underline"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
