"use client";

import React, { useState, useEffect } from 'react';
import { Activity, ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-blue-600 p-2 rounded-xl text-white">
                            <Activity size={24} />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">
                            MediChain<span className="text-blue-600">.</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex space-x-8 items-center bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-slate-100 shadow-sm">
                        <a href="#home" className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors">Home</a>
                        <a href="#solutions" className="text-slate-600 font-medium text-sm hover:text-blue-600 transition-colors">Solutions</a>
                        <a href="#network" className="text-slate-600 font-medium text-sm hover:text-blue-600 transition-colors">Providers</a>
                        <a href="#how-it-works" className="text-slate-600 font-medium text-sm hover:text-blue-600 transition-colors">Technology</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors px-4 py-2">
                            Login
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20">
                            Get Started
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4">
                    <a href="#home" className="text-slate-900 font-bold text-lg">Home</a>
                    <a href="#solutions" className="text-slate-600 font-medium text-lg">Solutions</a>
                    <a href="#network" className="text-slate-600 font-medium text-lg">Providers</a>
                    <a href="#how-it-works" className="text-slate-600 font-medium text-lg">Technology</a>
                    <div className="h-px bg-slate-100 w-full my-4"></div>
                    <button className="bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-bold w-full text-center">Login</button>
                    <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold w-full text-center flex justify-center items-center gap-2">
                        Get Started <ArrowUpRight size={20} />
                    </button>
                </div>
            )}
        </nav>
    );
};
