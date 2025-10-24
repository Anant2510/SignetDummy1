// /app/(user)/bracelets/[username]/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BraceletBanner from "@/component/ui/BraceletBanner";
 
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
        <>
            <main className="min-h-screen bg-gray-50 flex items-start justify-center p-6 mt-[76px]">


                <BraceletBanner params={params} />
            </main>
        </>
    );
}
