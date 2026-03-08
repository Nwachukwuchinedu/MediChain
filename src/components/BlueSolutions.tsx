"use client";

import React, { useRef, useEffect } from 'react';
import { Network, Lock, Database, Fingerprint, ArrowUpRight } from 'lucide-react';

export const BlueSolutions = () => {
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = circle1Ref.current?.closest('div[id="solutions"]');
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const progress = rect.top / window.innerHeight;
            if (circle1Ref.current) circle1Ref.current.style.transform = `translate(25%, -50%) translateY(${progress * -40}px)`;
            if (circle2Ref.current) circle2Ref.current.style.transform = `translate(-25%, 50%) translateY(${progress * 30}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const solutions = [
        { title: "IPFS Storage", desc: "Files are stored on decentralized IPFS networks rather than centralized AWS servers.", icon: <Network size={32} className="text-blue-600" /> },
        { title: "Zero-Trust Security", desc: "Browser Web Crypto API encrypts the file before it ever leaves your personal device.", icon: <Lock size={32} className="text-blue-600" /> },
        { title: "Polygon Immutable Logs", desc: "Every time a doctor views a record, a cryptographic log is permanently saved on the blockchain.", icon: <Database size={32} className="text-blue-600" /> },
        { title: "Patient Sovereignty", desc: "You are the ultimate custodian of your records. Grant or revoke access instantly.", icon: <Fingerprint size={32} className="text-blue-600" /> },
    ];

    return (
        <div id="solutions" className="py-24 bg-blue-600 text-white rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 my-12 relative overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" ref={circle1Ref}></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" ref={circle2Ref}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3" data-anim="anim-fade-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Complete Data <br />Sovereignty.
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Modern medical infrastructure designed around your privacy. Experience expert care from a free-stack architecture that puts you first.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:bg-slate-50">
                            View Architecture <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {solutions.map((sol, i) => (
                            <div key={i} className={`bg-white rounded-[2rem] p-8 text-slate-900 hover:-translate-y-1 transition-transform duration-300 delay-${i * 120}`} data-anim="anim-fade-up">
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    {sol.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{sol.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
