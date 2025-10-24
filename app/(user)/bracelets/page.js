// /app/(user)/bracelets/page.js
"use client";
import Link from "next/link";

export default function BraceletsStatic() {
    return (
        <main className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">All Bracelets</h1>
                <p className="mb-4 text-gray-600">This is the public bracelets page (for guests).</p>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded">Classic Diamond Bracelet</div>
                    <div className="p-4 border rounded">Tennis Bracelet</div>
                    <div className="p-4 border rounded">Charm Bracelet</div>
                    <div className="p-4 border rounded">Silver Everyday Bracelet</div>
                </div> */}

                <div className="mt-6">
                    <p className="text-sm text-gray-500">If you are logged in, you will see a personalised page.</p>
                </div>
            </div>
        </main>
    );
}
