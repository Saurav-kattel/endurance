import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Claims Dashboard
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Track and manage warranty claims with speed, clarity, and confidence.
        </p>
      </section>

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24">
        <button className="bg-black text-white  cursor-pointer px-6 py-3 rounded-full hover:bg-gray-800 transition">
          New Claim
        </button>
        <button
          onClick={() => navigate("/claims")}
          className="border border-gray-400  cursor-pointer text-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          View All Claims
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Real-Time Status</h2>
          <p className="text-gray-600 text-sm">
            Instantly view and track the lifecycle of your active claims.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Service & Sublets</h2>
          <p className="text-gray-600 text-sm">
            Log services and manage sublet repair costs easily.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Payments & Totals</h2>
          <p className="text-gray-600 text-sm">
            Transparent breakdowns of claim costs and payment history.
          </p>
        </div>
      </section>

      <section className="text-center mb-20">
        <p className="text-sm text-gray-400 mt-2">
          Designed for clarity and speed.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Endurance Warranty · All rights reserved.
      </footer>
    </main>
  );
}
