import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Books from "./pages/Books";
import Team from "./pages/Team";
import Event from "./pages/Event";
import TestImage from "./pages/TestImage";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/books" element={<Books />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Event />} />
        <Route path="/test-image" element={<TestImage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/books" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;