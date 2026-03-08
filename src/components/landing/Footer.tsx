import React from 'react';
import { Activity, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    <div className="lg:col-span-2" data-anim="anim-fade-left">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-500 p-2 rounded-xl text-white">
                                <Activity size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                MediChain<span className="text-blue-500">.</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-sm">
                            Your trusted partner for decentralized, secure, and patient-owned medical records. Built entirely on a free-stack architecture.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
                        </div>
                    </div>

                    <div data-anim="anim-fade-up" className="delay-100">
                        <h4 className="font-bold text-lg mb-6">Utility Pages</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Doctor Directory</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div data-anim="anim-fade-up" className="delay-200">
                        <h4 className="font-bold text-lg mb-6">Technology</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">IPFS Storage</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Polygon Testnet</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">WebCrypto API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FHIR Standard</a></li>
                        </ul>
                    </div>

                    <div data-anim="anim-fade-up" className="delay-300">
                        <h4 className="font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Data Custody</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">HIPAA Status</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} MediChain MVP. All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Powered by <span className="text-slate-300 font-medium">Free-Stack Web3 Architecture</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
