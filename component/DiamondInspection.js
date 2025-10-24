"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DiamondInspection({
    imageSrc = "/images/diamond.png",
    eyebrow = "REAL-TIME INTERACTIVE",
    title = "DIAMOND INSPECTION",
    description = `Take a closer look at your favorite diamonds using our Real-Time
  Diamond Inspection service; a one-on-one consultation with a
  non-commissioned certified gemologist. Share your screen and get expert
  guidance as you explore diamonds in 360° HD with up to 40x magnification.`,
    ctaText = "START YOUR DIAMOND INSPECTION NOW",
    ctaHref = "#",
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <section className="bg-[#fdfdfa] mb-40">
            <div className="max-w-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Image */}
                    <div className="order-1 md:order-0">
                        <div className="relative overflow-hidden ">
                            {/* Positioned wrapper with explicit height — Image fill will fill THIS box */}
                            <div className="relative w-full pb-44 h-[280px] md:h-[420px] lg:h-[520px] flex items-center justify-center">
                                <Image
                                    src={imageSrc || "/images/diamond.png"}
                                    alt="Diamond Inspection"
                                    fill
                                    className={`object-cover transition-all  duration-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                    onLoadingComplete={() => setLoaded(true)}
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-0 md:order-1">
                        <p className="text-sm font-medium text-gray-500 tracking-wide mb-3 uppercase ">
                            {eyebrow}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-gray-900">
                            {title}
                        </h2>

                        <p className="text-gray-600 mb-6 max-w-xl leading-relaxed">{description}</p>

                        <Link href={ctaHref}>
                            <span className="inline-block border-b-2 border-[#ff8081] hover:border-[#000] hover:text-[#000] text-sm font-semibold text-[#ff8081] tracking-wide pb-0.5 transition-colors duration-200">
                                {ctaText}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
