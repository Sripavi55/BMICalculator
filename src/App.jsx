import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setError("Please enter both height and weight.");
      setBmi(null);
      return;
    }
    const hCm = parseFloat(height);
    const w = parseFloat(weight);

    if (hCm <= 0 || w <= 0) {
      setError("Height and Weight must be greater than 0.");
      setBmi(null);
      return;
    }

    const h = hCm / 100;
    const result = w / (h * h);

    setBmi(result.toFixed(2));
    setError("");
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setError("");
  };

  const getCategory = () => {
    if (!bmi) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const getCategoryColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "bg-blue-100 text-blue-600";
    if (bmi < 24.9) return "bg-green-100 text-green-600";
    if (bmi < 29.9) return "bg-yellow-100 text-yellow-600";
    return "bg-red-100 text-red-600";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      <div className="backdrop-blur-lg bg-white/80 shadow-2xl rounded-3xl p-10 w-[380px] transition-all duration-300">

        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          BMI Calculator
        </h1>

        <input
          type="number"
          placeholder="Height (in cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="number"
          placeholder="Weight (in kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={calculateBMI}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition duration-300"
        >
          Calculate BMI
        </button>

        <button
          onClick={resetFields}
          className="w-full mt-3 bg-gray-200 text-gray-700 py-2 rounded-xl hover:bg-gray-300 transition"
        >
          Reset
        </button>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {bmi && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-700">
              Your BMI
            </p>

            <p className="text-4xl font-bold text-indigo-600 mt-2">
              {bmi}
            </p>

            <span
              className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor()}`}
            >
              {getCategory()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
