import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import staffsynclogo1 from "../assets/staffsynclogo1.png"; // adjust path if needed
import landingpagerightside from "../assets/landingpagerightside.jpg"; // adjust path if needed

function Login() {
  const { login } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (!success) toast.error("Invalid credentials!");
  };

  return (
    <div className="landing-page h-screen flex">
      {/* Left Section */}
      <div className="left-section flex flex-col justify-center items-center bg-blue-100 w-1/2 p-8">
        {/* Logo with container border */}
        <div className="logo-box mb-6">
          <img src={staffsynclogo1} alt="Company Logo" className="logo w-80 h-64 object-contain bg-blue-50 p-2 rounded-[50px]" />
        </div>

        <h1 className="text-4xl font-bold mb-6 text-black-700">Welcome</h1>

        <form onSubmit={handleSubmit} className="auth-form w-3/4 flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Email"
            value={form.username}
            onChange={handleChange}
            className="p-3 border rounded-md w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 border rounded-md w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>

        </form>
      </div>

      {/* Right Section */}
      <div className="right-section w-1/2 hidden md:block">
        <img
          src={landingpagerightside}
          alt="Welcome To Staff Sync"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Login;
