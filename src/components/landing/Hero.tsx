import React from 'react';
import { ArrowUpRight, Play, ShieldCheck, Lock } from 'lucide-react';

export const Hero = () => {
    return (
        <div id="home" className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Abstract Backgrounds */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Trusted Badge */}
                <div className="inline-flex items-center gap-3 bg-white p-2 pr-5 rounded-full shadow-sm border border-slate-200 mb-8 animate-float-delayed">
                    <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">+</div>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">10,000+ records secured!</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 max-w-5xl mx-auto">
                    Medical records secured by <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">blockchain technology.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards 1.2s', opacity: 0 }}>
                    Patients completely control their data. Doctors access records seamlessly.
                    Built on a zero-trust architecture with IPFS and Polygon testnet.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20" style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards 1.4s', opacity: 0 }}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group w-full sm:w-auto">
                        Book an Appointment
                        <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto">
                        <Play size={20} className="fill-slate-900" /> Watch Video
                    </button>
                </div>

                {/* Hero Image / Dashboard Mockup */}
                <div className="relative max-w-5xl mx-auto" style={{ animation: 'scaleIn 1s cubic-bezier(0.16,1,0.3,1) forwards 1.6s', opacity: 0 }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 h-full w-full pointer-events-none rounded-3xl"></div>
                    <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                        alt="Doctor Consulting Patient"
                        className="rounded-[2.5rem] shadow-2xl object-cover h-[400px] md:h-[500px] w-full border-8 border-white"
                    />

                    {/* Floating UI Elements */}
                    <div className="absolute top-10 -left-6 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-4 z-20 animate-float shadow-xl">
                        <div className="bg-green-100 p-3 rounded-xl text-green-600">
                            <ShieldCheck size={28} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-extrabold text-slate-900">Verified on Polygon</p>
                            <p className="text-xs text-slate-500 font-mono mt-0.5">Hash: 0x8f...3a92</p>
                        </div>
                    </div>

                    <div className="absolute bottom-20 -right-6 md:-right-12 glass-card p-5 rounded-2xl flex items-center gap-4 z-20 animate-float-delayed shadow-xl">
                        <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                            <Lock size={28} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-extrabold text-slate-900">AES-256 Encrypted</p>
                            <p className="text-xs text-slate-500 mt-0.5">Patient key required</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
