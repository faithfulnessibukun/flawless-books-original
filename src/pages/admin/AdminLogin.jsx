import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { attemptAdminLogin } from "../../utils/adminAuth";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attemptAdminLogin(password)) {
      toast.success("Welcome back.");
      navigate("/admin/books");
    } else {
      toast.error("Incorrect password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#3B1130] flex items-center justify-center px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F7EFF3] rounded-2xl p-8 w-full max-w-sm shadow-2xl"
      >
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
          /ˈædmɪn/ Admin
        </p>
        <h1
          className="text-2xl font-black text-[#241B22] mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Manage Books
        </h1>

        <label className="block text-xs font-bold uppercase tracking-wider text-[#241B22] mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-2 border-[#3B1130]/10 rounded-xl p-3 mb-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871D]"
          placeholder="Enter admin password"
          autoFocus
        />

        <button
          type="submit"
          className="w-full bg-[#E8871D] hover:bg-[#C96F12] text-[#2A0C22] font-bold py-3 rounded-xl transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
