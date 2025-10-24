"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BraceletBanner({ params }) {
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

    // Dynamic pricing
    const originalPrice = 2120;
    const discount = 20;
    const discountedPrice = originalPrice - (originalPrice * discount) / 100;

    return (
        <section className="relative w-full flex flex-col lg:flex-row items-center justify-between bg-[#fdf4ec] px-8 md:px-16 py-12 overflow-hidden">
            {/* Left Image */}
            <div className="flex justify-center lg:w-1/2">
                <Image
                    src="/images/banner_image.png"
                    alt="Bracelet"
                    width={500}
                    height={500}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                <h1 className="text-5xl font-extrabold tracking-wider text-[#6b0f0f] mb-4">
                    BRACELETS
                </h1>

                <div className="text-lg text-[#6b0f0f] space-y-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    <p>
                        Dear <strong>{username || "Customer"}</strong>,
                    </p>
                    <p>
                        As a valued customer who previously purchased the{" "}
                        <strong>Flush Fit Pavé Diamond Wedding Ring in 14K Yellow Gold (1.50mm)</strong>,
                        you’re now exclusively eligible for{" "}
                        <strong>{discount}% off</strong> on our elegant{" "}
                        <strong>
                            Bezel Tennis Bracelet featuring 2 CTW Lab-Grown Diamonds in 14K Yellow Gold
                        </strong>.
                    </p>
                    <p>
                        <strong>Original Price:</strong> ${originalPrice.toLocaleString()}
                        <br />
                        <strong>Your Price:</strong>{" "}
                        <span className="text-[#6b0f0f] font-bold">
                            ${discountedPrice.toLocaleString()}
                        </span>
                    </p>
                    <p>
                        Enjoy this special offer as our thank you for your continued trust 💎
                    </p>
                </div>

                <button className="mt-8 bg-[#6b0f0f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#4e0b0b] transition">
                    SHOP NOW
                </button>
            </div>
        </section>
    );
}
