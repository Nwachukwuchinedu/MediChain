import React from 'react';
import { Share2 } from 'lucide-react';

export const HowItWorks = () => {
    return (
        <div id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative order-2 lg:order-1" data-anim="anim-fade-left">
                        <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
                            alt="Medical Tech"
                            className="relative z-10 rounded-[3rem] shadow-xl border-8 border-white w-full h-[600px] object-cover"
                        />
                        {/* Overlay card */}
                        <div className="absolute bottom-10 -right-8 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-xs animate-float delay-400" data-anim="anim-scale-in">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Share2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Access Granted</h4>
                                    <p className="text-xs text-slate-500">To Dr. Emily Davis</p>
                                </div>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 w-full h-full"></div>
                            </div>
                            <p className="text-xs text-center text-green-600 font-bold mt-3">Decryption Key Sent</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 uppercase tracking-wide" data-anim="anim-fade-up">
                            Step-by-step Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight delay-100" data-anim="anim-fade-up">
                            Seamless user experience for patients & doctors.
                        </h2>

                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Upload & Encrypt", desc: "Select your health records. The browser encrypts them locally using AES-256." },
                                { step: "02", title: "Store on IPFS", desc: "The encrypted file is uploaded to the decentralized IPFS network securely." },
                                { step: "03", title: "Blockchain Hash", desc: "A unique cryptographic hash is stored on the Polygon testnet for validation." },
                                { step: "04", title: "Share Securely", desc: "Generate temporary access keys to let specific doctors view your data." }
                            ].map((item, idx) => (
                                <div key={idx} className={`flex gap-6 delay-${idx * 120}`} data-anim="anim-fade-right">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
