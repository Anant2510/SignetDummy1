"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function SingleProfile({ params }) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);
    const [userEmail, setUserEmail] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {

        Promise.resolve(params)
            .then((p) => {
                const uname = p?.username ?? null;
                setUsername(uname);


                const logged = localStorage.getItem("isLoggedIn") === "true";
                const email = localStorage.getItem("userEmail");

                if (logged && email) {
                    setUserEmail(email);
                    setChecking(false);
                } else {

                    router.push("/");
                }
            })
            .catch((err) => {
                console.error("Error resolving params:", err);
                router.push("/");
            });
    }, [params, router]);

    if (checking) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center text-gray-600">Checking your session...</div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
                <h1 className="text-3xl font-bold text-[#ff8081] mb-4">
                    Dear {username}, Welcome 💎
                </h1>

                <p className="text-gray-700 mb-6">
                    You are signed in as <span className="font-medium">{userEmail}</span>.
                </p>

                <section className="text-left border-t pt-4 mt-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">Recommended for you</h2>
                    <ul className="list-inside list-disc text-gray-600 space-y-1">
                        <li>💍 Elegant Diamond Rings — Trending</li>
                        <li>💎 Gemstone Bracelets — Popular picks</li>
                        <li>✨ Classic Engagement Designs</li>
                    </ul>
                </section>

                <div className="mt-8 flex justify-center gap-4">


                    <button onClick={() => router.push("/")} className="border border-gray-200 px-5 py-2 rounded-md">
                        Home
                    </button>
                </div>
            </div>
        </main>
    );
}
