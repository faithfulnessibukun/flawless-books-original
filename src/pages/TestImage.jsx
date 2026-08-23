import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import testImage from "../assets/groupbooks.jpeg";

export default function TestImage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Image Test</h1>
        <p className="mb-4">If the image below fails to load, check the browser console/network tab.</p>
        <div className="border p-4">
          <img src={testImage} alt="group books" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
