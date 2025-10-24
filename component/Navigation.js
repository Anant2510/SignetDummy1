"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // <- added
import LoginModal from "@/component/ui/LoginModal";

const NAV_ITEMS = [
    "ENGAGEMENT",
    "DIAMONDS",
    "RINGS",
    "EARRINGS",
    "BRACELETS",
    "NECKLACES",
    "GEMSTONES",
    "GIFTS & COLLECTIONS",
];

const Header = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);


    const syncLoggedInFromStorage = useCallback(() => {
        try {
            const isLogged = localStorage.getItem("isLoggedIn") === "true";
            const email = localStorage.getItem("userEmail") || "";
            const uname = email ? email.split("@")[0] : null;
            setLoggedIn(isLogged);
            setUsername(uname);
        } catch (err) {
            // localStorage might be unavailable in some contexts — ignore
            setLoggedIn(false);
            setUsername(null);
        }
    }, []);

    useEffect(() => {
        // on mount, sync initial logged-in state
        syncLoggedInFromStorage();

        // listen for storage events (other tabs) to keep header in sync
        const onStorage = (e) => {
            if (e.key === "isLoggedIn" || e.key === "userEmail") {
                syncLoggedInFromStorage();
            }
        };
        window.addEventListener("storage", onStorage);

        return () => {
            window.removeEventListener("storage", onStorage);
        };
    }, [syncLoggedInFromStorage]);


    const handleModalClose = useCallback(() => {
        setPopupOpen(false);
        setTimeout(() => {
            syncLoggedInFromStorage();
        }, 60);
    }, [syncLoggedInFromStorage]);


    const handleLogout = useCallback(() => {
        try {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
        } catch (err) {
            console.warn("localStorage error while logging out:", err);
        }

        setLoggedIn(false);
        setUsername(null);


        router.push("/");

    }, [router]);


    const braceletsHref = () => {
        if (loggedIn && username) return `/bracelets/${username}`;
        return `/bracelets`;
    };

    return (
        <>
            <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
                <div className="w-full mx-auto px-6">
                    <div className="flex justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <span className="sr-only">James Allen Home</span>
                            <span className="text-2xl tracking-tight font-semibold">
                                {/* SVG logo here (kept your original) */}
                                <svg height="19" viewBox="0 0 157 19" xmlns="http://www.w3.org/2000/svg" fill="#1B1B1B" className="logoSvg--uSFUllT183aF4jFwQA8h"><path d="m17.47 1.07-6.71 15.1h3.57l1.34-3.24h6.99L24 16.17h3.67l-6.75-15.1h-3.45zm-.68 9.2 2.38-5.75 2.38 5.75h-4.76zM37.45 10.44l-5.67-9.37h-2.86v15.08h3.24v-8.9l4.43 7.3h1.54l4.46-7.4v8.99h3.27V1.07h-2.91l-5.52 9.37zM52.52 9.86h6.96V7.12h-6.96V3.88h7.9V1.07H49.03v15.08H60.7v-2.79h-8.18v-3.5zM72.8 8.54c-.53-.3-1.06-.56-1.7-.76-.61-.2-1.25-.35-1.86-.5-.63-.13-1.19-.26-1.72-.41-.53-.13-.94-.33-1.25-.59-.31-.25-.49-.58-.49-.95 0-.38.1-.61.28-.85.2-.25.5-.45.91-.6.41-.15.97-.23 1.68-.23s1.34.1 2.05.28c.71.2 1.42.49 2.08.9l1.09-2.64c-.69-.43-1.5-.76-2.44-.99-.91-.23-1.85-.34-2.78-.34-1.42 0-2.61.21-3.54.64-.93.43-1.64 1.01-2.1 1.72-.46.71-.69 1.5-.69 2.36 0 .86.16 1.44.46 1.93.3.51.73.93 1.24 1.26.51.33 1.09.57 1.73.77.61.2 1.24.34 1.85.49.61.13 1.19.27 1.72.41.53.14.94.31 1.21.53.31.24.49.56.49.94 0 .41-.1.63-.31.87-.2.24-.5.44-.94.59-.44.15-1 .22-1.67.22-.68 0-1.79-.15-2.68-.43-.89-.28-1.65-.65-2.3-1.12l-1.19 2.64c.69.53 1.58.94 2.7 1.28 1.11.33 2.25.5 3.44.5 1.22 0 2.61-.2 3.57-.63.94-.43 1.64-1.01 2.09-1.69.45-.7.7-1.46.7-2.32 0-.86-.15-1.41-.45-1.94-.33-.54-.73-.94-1.26-1.23zM87.74 1.07l-6.71 15.1h3.57l1.34-3.24h6.99l1.34 3.24h3.67l-6.75-15.1h-3.45zm-.68 9.2 2.38-5.75 2.38 5.75h-4.76zM102.68 1.07h-3.49v15.08h11.02v-2.84h-7.53V1.07zM115.14 1.07h-3.52v15.08h11.04v-2.84h-7.52V1.07zM127.52 9.86h7.04V7.12h-7.04V3.88h7.93V1.07h-11.37v15.08h11.67v-2.79h-8.29v-3.5zM148.59 1.07v9.17l-7.47-9.17h-2.91v15.08h3.47V7l7.47 9.15h2.91V1.07h-3.47zM153.46 2.79V1.42h-.58v-.35h1.65v.35h-.58v1.37h-.49zm1.42 0V1.07h.38l.79 1.19h-.2l.79-1.19h.38v1.72h-.43V1.7h.08l-.61.91h-.2l-.61-.91h.1v1.09h-.46zM4.91 16.43c-1.01 0-1.94-.2-2.81-.59-.86-.38-1.54-.91-2.1-1.6l1.92-2.33c.4.56.86.97 1.32 1.25.46.28.96.43 1.53.43 1.42 0 2.13-.84 2.13-2.51v-7.2H1.57V1.07h8.76v9.78c0 1.87-.46 3.26-1.37 4.17-.91.91-2.25 1.37-4.05 1.37z"></path></svg>
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex lg:items-center lg:gap-8">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item}
                                    href={item === "BRACELETS" ? braceletsHref() : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-gray-900"
                                >
                                    {item}
                                </Link>
                            ))}

                            {loggedIn ? (

                                <div className="flex items-center gap-3">
                                    <Link href={`/users/${username}`} className="text-sm text-gray-700">
                                        Welcome, {username}
                                    </Link>
                                    <button
                                        className="text-sm font-medium text-gray-700"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="text-sm font-medium text-gray-700"
                                    onClick={() => setPopupOpen(true)}
                                >
                                    Login
                                </button>
                            )}
                        </nav>

                        {/* Mobile menu button */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setOpen((prev) => !prev)}
                                aria-label="Toggle menu"
                                aria-expanded={open ? "true" : "false"}
                                className="p-2 text-gray-600 inline-flex items-center justify-center"
                            >
                                {open ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown */}
                <nav className={`lg:hidden transition-all duration-300 ${open ? "block" : "hidden"} border-t border-gray-100 bg-white`}>
                    <div className="max-w-[1200px] mx-auto px-4 py-3 space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item}
                                href={item === "BRACELETS" ? braceletsHref() : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-sm uppercase tracking-wide py-2 text-gray-700"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}

                        {/* show login/welcome in mobile too */}
                        <div className="pt-2">
                            {loggedIn ? (
                                <div className="flex items-center justify-between">
                                    <Link href={`/users/${username}`} className="text-sm text-gray-700">Welcome, {username}</Link>
                                    <button onClick={handleLogout} className="text-sm text-gray-700">Logout</button>
                                </div>
                            ) : (
                                <button onClick={() => setPopupOpen(true)} className="text-sm text-gray-700">Login</button>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            {/* modal rendered outside header so it is not clipped */}
            {popupOpen && <LoginModal open={popupOpen} onClose={handleModalClose} />}
        </>
    );
};

export default Header;
