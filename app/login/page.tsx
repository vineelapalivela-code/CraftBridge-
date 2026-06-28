import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-100 to-orange-50 flex justify-center items-center">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-orange-700">
            Welcome Back 👋
          </h1>

          <p className="text-center text-gray-600 mt-2">
            Login to continue your CraftBridge journey.
          </p>

          <div className="mt-8 space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
              Login
            </button>

          </div>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <span className="text-orange-600 font-semibold cursor-pointer">
              {" "}Sign Up
            </span>
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}