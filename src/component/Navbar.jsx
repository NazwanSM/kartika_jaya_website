'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
    { href: "#tentang", name: "Tentang Kami" },
    { href: "#visi-misi", name: "Visi & Misi" },
    { href: "#struktur", name: "Struktur Perusahaan" },
    { href: "#proyek", name: "Proyek" },
    { href: "#budaya", name: "Budaya Kerja" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return ( 
        <header className="max-w-screen transition-all duration-300 fixed top-4 left-4 right-4 z-50 !py-0">
        <div className="container-header transition-all duration-300 mx-4 mt-4 rounded-xl bg-slate-50/95 backdrop-blur-md shadow-md px-6 py-3 text-slate-950">
            <div className='flex items-center justify-between flex-end px-4 lg:px-12 py-4 '>
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                <Image 
                    src="/logo-kartika-jaya.svg" 
                    alt="Kartika Jaya Kontruksindo Logo" 
                    width={150} 
                    height={50} 
                    className="h-10 w-auto"
                />
                </Link>
                <div className='flex flex-col items-end ml-auto'>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-x-10 px-4 text-base font-medium">
                        {navItems.map((item) => (
                            <a 
                                key={item.href} 
                                href={item.href} 
                                className='transition-colors nav-link text-black/80 hover:text-blue-600 hover:underline'
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden text-gray-700"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex-shrink-0">
                    <Image 
                    src="/logo-kartika-jaya.svg" 
                    alt="Kartika Jaya Kontruksindo Logo" 
                    width={150} 
                    height={50} 
                    className="h-10 w-auto"
                    />
                </Link>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <nav className="flex flex-col space-y-6 py-4 text-center">
                {navItems.map((item) => (
                    <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    {item.name}
                    </Link>
                ))}
                </nav>
            </div>
            </div>
        )}
        </header>
    )
}