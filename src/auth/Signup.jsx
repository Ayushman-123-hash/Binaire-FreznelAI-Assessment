import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setMessage("");

    // Check password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Check minimum password length
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created:", userCredential.user);

      setMessage("Account created successfully!");

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Firebase Signup Error:", error);

      // Show exact Firebase error
      setMessage(`${error.code}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[600px] bg-[#1b2838] flex justify-center items-center px-4 py-16">
      <div className="w-full max-w-[420px] bg-[#162536] p-8 shadow-xl">

        <h1 className="text-white text-2xl font-normal mb-2">
          Create Your Account
        </h1>

        <p className="text-[#8f98a0] text-sm mb-7">
          Sign up to continue to Steam Store
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-[#c7d5e0] text-xs mb-2">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full bg-[#101923] border border-[#233b4d] text-white px-3 py-3 outline-none focus:border-[#66c0f4]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#c7d5e0] text-xs mb-2">
              PASSWORD
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full bg-[#101923] border border-[#233b4d] text-white px-3 py-3 outline-none focus:border-[#66c0f4]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[#c7d5e0] text-xs mb-2">
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              className="w-full bg-[#101923] border border-[#233b4d] text-white px-3 py-3 outline-none focus:border-[#66c0f4]"
            />
          </div>

          {/* Firebase Message */}
          {message && (
            <div className="bg-[#101923] border border-[#31506a] px-3 py-3">
              <p className="text-[#66c0f4] text-xs break-words">
                {message}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#75b9e6] to-[#4b9ccc] text-[#0e1a24] py-3 font-semibold hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-[#8f98a0] text-xs mt-6 text-center">
          Already have an account? Sign in
        </p>

      </div>
    </main>
  );
}