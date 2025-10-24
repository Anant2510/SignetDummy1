// components/FooterSubscribe.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function FooterSubscribe({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | ok | error
    const [error, setError] = useState("");

    function isValidEmail(e) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        if (!isValidEmail(email.trim())) {
            setError("Please enter a valid email address.");
            return;
        }
        setStatus("sending");

        try {
            if (typeof onSubmit === "function") {
                await onSubmit(email.trim());
            } else {
                // simulate network
                await new Promise((r) => setTimeout(r, 700));
            }
            setStatus("ok");
            setEmail("");
            setTimeout(() => setStatus("idle"), 2500);
        } catch (err) {
            setStatus("error");
            setError(err?.message || "Something went wrong. Please try again.");
        }
    }

    return (
        <footer className="bg-[#3f3f3f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 text-center">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
                    <div className="text-center md:text-left md:pr-6">
                        <h3 className="text-sm md:text-base font-semibold tracking-wide">
                            JOIN OUR EMAIL LIST
                        </h3>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-center w-full md:w-auto"
                    >
                        <label htmlFor="footer-sub-email" className="sr-only">
                            Email address
                        </label>

                        <div className="flex items-center gap-3">
                            <input
                                id="footer-sub-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                placeholder="Email Address..."
                                className="w-[240px] bg-white md:w-[340px] lg:w-[420px] px-4 py-2 text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#ff8081]"
                                aria-invalid={!!error}
                                aria-describedby={error ? "footer-sub-error" : undefined}
                            />

                            <button
                                type="submit"
                                className={`px-4 py-2 border border-gray-300 text-white bg-transparent hover:bg-white/10 transition-colors min-w-[72px] flex items-center justify-center ${status === "sending" ? "opacity-80" : ""
                                    }`}
                                disabled={status === "sending"}
                                aria-live="polite"
                            >
                                {status === "sending" ? "..." : "JOIN"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-3 md:mt-4 text-center md:text-center">
                    {error && (
                        <p id="footer-sub-error" className="text-sm text-[#ff8081]">
                            {error}
                        </p>
                    )}
                    {status === "ok" && (
                        <p className="text-sm w-[100%] text-center text-green-200">Thanks — you're on the list!</p>
                    )}
                </div>

                <div className="mt-4 text-center  text-xs text-gray-200 max-w-3xl mx-auto  leading-snug">
                    <p>
                        I agree to receive promotional emails from James Allen. You can
                        unsubscribe at any time. By clicking join, you accept our{" "}
                        <Link href="/privacy" className="text-white underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}
