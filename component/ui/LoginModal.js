"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function LoginModal(props = {}) {
  const { open: controlledOpen, onClose } = props ?? {};
  const isControlled =
    Object.prototype.hasOwnProperty.call(props ?? {}, "open") &&
    typeof controlledOpen === "boolean";

  const [open, setOpen] = useState(() =>
    typeof controlledOpen === "boolean" ? controlledOpen : false
  );

  useEffect(() => {
    if (isControlled) setOpen(Boolean(controlledOpen));

  }, [controlledOpen, isControlled]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleClose() {
    if (isControlled) {
      onClose && onClose();
    } else {
      setOpen(false);
    }
    setPassword("");
    setError("");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);


    const enteredEmail = (email ?? "").trim().toLowerCase();
    const enteredPassword = password ?? "";


    // console.log({ enteredEmail, enteredPasswordPresent: !!enteredPassword });


    const match = enteredEmail.match(/^jwell([1-9]|1[0-9]|20)@example\.com$/);

    if (!enteredEmail || !enteredPassword) {
      setError("Please enter both email and password.");
      setSubmitting(false);
      return;
    }

    if (match && enteredPassword === "123456") {
      try {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", enteredEmail);
      } catch (err) { console.warn(err); }

      // analytics push
      window.dataLayer = window.dataLayer || [];
      const username = enteredEmail.split("@")[0];
      const payload = {
        event: "user_login",
        user: { username, email: enteredEmail },
        timestamp: new Date().toISOString()
      };
      window.dataLayer.push(payload);
      console.log("dataLayer push:", payload);

      // close modal, no redirect
      handleClose();
      setSubmitting(false);
      return;
    }

    setError("Invalid email or password.");
    setSubmitting(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
        <button onClick={handleClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100">✕</button>

        <h2 className="mb-6 text-center text-xl font-semibold tracking-wide text-gray-800">LOGIN</h2>

        <form onSubmit={handleLogin}>
          <label className="mb-2 block text-sm text-gray-600">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#ff8081]"
            placeholder="jwell1@example.com"
          />

          <div className="flex items-center justify-between">
            <label className="mb-2 block text-sm text-gray-600">Password</label>
            <a className="text-sm text-gray-400 hover:text-gray-600" href="#" onClick={(ev) => { ev.preventDefault(); alert("Forgot password flow"); }}>Forgot password?</a>
          </div>

          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#ff8081]"
            placeholder="123456"
          />

          {error && <div className="mb-3 text-sm text-red-500">{error}</div>}

          <button
            type="submit"
            disabled={submitting}
            className="mb-6 w-full rounded-md bg-[#ff8081] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "LOGIN"}
          </button>
        </form>

        <div className="mb-6 flex items-center">
          <div className="flex-1 border-t border-gray-200" />
          <div className="mx-3 text-xs text-gray-400">or sign in with</div>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        <div className="mb-6 flex gap-4 justify-center">
          <button aria-label="Sign in with Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm" onClick={() => alert("FB signin - integrate OAuth")}>
            {/* icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.88C18.343 21.128 22 16.99 22 12z" fill="#1877F2" /></svg>
          </button>

          <button aria-label="Sign in with Google" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm" onClick={() => alert("Google signin - integrate OAuth")}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 11.2c3.54 0 6.13 1.53 7.53 2.83l5.53-5.53C34.92 5.05 29.9 3 24 3 14.91 3 7.49 8.57 4.61 16.05l6.44 4.99C12.87 14.03 17.98 11.2 24 11.2z" /><path fill="#34A853" d="M46.5 24c0-1.6-.16-3.14-.45-4.6H24v8.7h12.7c-.54 3-2.72 5.55-5.8 7.26l6.68 5.17C43.7 36.88 46.5 30.9 46.5 24z" /><path fill="#4A90E2" d="M10.9 28.04A13.99 13.99 0 0 1 10 24c0-1.4.22-2.74.63-4.01L4.19 14C2.4 17.92 1.5 21.87 1.5 26c0 4.17 1 8.08 2.69 11.69l7.71-9.65z" /><path fill="#FBBC05" d="M24 44.8c6.23 0 11.47-2.06 15.29-5.6l-7.07-5.46C29.9 34.9 27.2 36 24 36c-6.07 0-11.2-3.18-13.06-7.71l-7.7 9.66C7.5 41.78 14.91 44.8 24 44.8z" /></svg>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="#" className="font-medium text-gray-800 underline" onClick={(e) => { e.preventDefault(); alert("Open signup modal"); }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
