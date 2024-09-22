"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center bg-purple-800 fixed w-full z-10">
                <Link href="/" className="flex items-center pr-4">
                    <Image className="rounded-r-2xl" src="/logo.png" alt="Logo" width={100} height={100} />
                    <h1 className="pl-4 text-2xl md:text-4xl">Allan Tolnæs</h1>
                </Link>
                <div className="hidden md:flex items-center text-lg md:text-2xl gap-6 pr-4">
                    <Link id="link" href="/">Home</Link>
                    <Link id="link" href="/about">About</Link>
                    <Link id="link" href="/my-work">My Work</Link>
                    <Link id="link" href="/contact">Contact</Link>
                </div>
                <div className="md:hidden pr-4">
                    <button onClick={toggleMenu} className="text-2xl">
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 bg-purple-800 w-full p-4 flex flex-col md:hidden">
                    <Link id="link" href="/" className="py-2 text-lg text-white hover:bg-purple-700 transition rounded">
                        Home
                    </Link>
                    <Link id="link" href="/about" className="py-2 text-lg text-white hover:bg-purple-700 transition rounded">
                        About
                    </Link>
                    <Link id="link" href="/my-work" className="py-2 text-lg text-white hover:bg-purple-700 transition rounded">
                        My Work
                    </Link>
                    <Link id="link" href="/contact" className="py-2 text-lg text-white hover:bg-purple-700 transition rounded">
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
}
