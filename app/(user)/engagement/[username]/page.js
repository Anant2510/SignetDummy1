"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BraceletsPersonal({ params }) {
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
                    router.push("/bracelets");
                }
            })
            .catch(() => router.push("/bracelets"));
    }, [params, router]);

    if (checking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div>Checking session...</div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-[#ff8081] mb-4">
                    Dear {username}, Welcome 💎
                </h1>
                <p className="text-gray-700 mb-6">
                    Personalized bracelets for <b>{userEmail}</b>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded">Featured: Tennis Bracelet</div>
                    <div className="p-4 border rounded">Classic Diamond Bracelet</div>
                    <div className="p-4 border rounded">Charm Bracelet</div>
                    <div className="p-4 border rounded">Silver Everyday Bracelet</div>
                </div>
            </div>
        </main>
    );
}
