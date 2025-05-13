import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
        <footer className="bg-blue-800 text-white text-center py-4">
            © 2024 PT Kartika Jaya Kontruksindo. All Rights Reserved.
        </footer>
        </div>
    );
}