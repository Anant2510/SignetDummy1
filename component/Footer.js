"use client";
import { FaFacebookF, FaPinterestP, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
    const footerData = [
        {
            title: "EXPERIENCE JAMES ALLEN",
            links: [
                "360° DISPLAY TECHNOLOGY",
                "VIRTUAL RING SIZER",
                "BECOME AN AFFILIATE",
                "INFLUENCERS & COMMUNITY",
                "CUSTOM DESIGN RINGS",
                "PACKAGING",
                "SITE MAP",
            ],
        },
        {
            title: "WHY JAMES ALLEN?",
            links: [
                "24/7 CUSTOMER SERVICE",
                "LIFETIME WARRANTY",
                "FREE SHIPPING WORLDWIDE",
                "JEWELRY INSURANCE",
                "JEWELRY PROTECTION PLANS",
                "1 YEAR FREE RESIZING",
                "FREE ENGRAVING",
                "TAX & DUTY CALCULATOR",
            ],
        },
        {
            title: "ABOUT JAMES ALLEN",
            links: [
                "ABOUT US",
                "REVIEWS",
                "ENGAGEMENT MOMENTS",
                "FAQ",
                "THE BLOG",
                "CITIES",
                "STORES",
                "CONTACT US",
                "CAREERS",
            ],
        },
        {
            title: "POLICIES",
            links: [
                "CONFLICT-FREE DIAMONDS",
                "LIFETIME UPGRADE",
                "PAYMENT OPTIONS",
                "TERMS OF USE",
                "PRIVACY POLICY",
                "COOKIES POLICY",
                "ACCESSIBILITY",
                "COOKIES SETTINGS",
            ],
        },
    ];

    const socialIcons = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <SiX />, href: "#" },
        { icon: <FaPinterestP />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaTiktok />, href: "#" },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 py-10 text-sm text-gray-700">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {footerData.map((section, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-gray-900 mb-3 uppercase tracking-wide text-sm">
                            {section.title}
                        </h3>
                        <ul className="space-y-2">
                            {section.links.map((link, j) => (
                                <li key={j}>
                                    <a
                                        href="#"
                                        className="hover:text-[#ff8081] transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-10 space-y-4">
                {/* Social Icons */}
                <div className="flex space-x-5 text-xl">
                    {socialIcons.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="hover:text-[#ff8081] transition-colors duration-200"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Payment Icons */}
                <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
                    {["Visa", "MasterCard.4201f", "Discover.f1416", "ApplePay.84ce0", "AmericanExpress.04252"].map((card) => (
                        <Image
                            key={card}
                            src={`/images/footer/${card}.png`} // place your payment logos in public/
                            alt={card}
                            width={40}
                            height={25}
                            className="object-contain"
                        />
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-xs mt-6">
                    © 2025 James Allen. All Rights Reserved. | ID: 801709015
                </p>
            </div>
        </footer>
    );
}
