// src/components/SignUp.jsx
import React, { useState } from "react";

const SignUp = ({ isOpen, onClose, onLoginClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      console.log("Form submitted", { name, email, password });
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold">IQT Academy</h2>
        </div>
        <h3 className="text-2xl mb-4 text-center">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Create Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create New Account
            </button>
          </div>
          <div className="mt-4 text-center">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms">
              By signing up, I agree to the{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button onClick={onLoginClick} className="text-blue-500">
            Log Into Existing Account?
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Unable to Login? We are here -{" "}
            <a href="mailto:contact@IQTacademy.com" className="text-blue-500">
              contact@IQTacademy.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
