"use client";

import React, { useState } from 'react';

export const FAQ = () => {
    const faqs = [
        {
            q: "Where is my medical data actually stored?",
            a: "Your encrypted medical files are stored on IPFS (InterPlanetary File System), a decentralized storage network. Only the cryptographically verifiable hash of that file is stored on the Polygon blockchain."
        },
        {
            q: "Can anyone on the blockchain see my health records?",
            a: "No. The files are encrypted locally on your browser using AES-256 before upload. Even if someone finds your file on IPFS, they cannot read it without your specific decryption key."
        },
        {
            q: "How do doctors access the files?",
            a: "When you share a record with a doctor, the system securely transfers a temporary decryption key to them. They can then view the document in their dashboard. You can revoke this access at any time."
        },
        {
            q: "Is this MVP compliant with HIPAA/GDPR?",
            a: "This MVP simulates compliance through strong AES-256 encryption, strict patient data ownership, and immutable audit logs. A full production rollout would require formal compliance audits."
        }
    ];

    const [openIdx, setOpenIdx] = useState(0);

    return (
        <div className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6" data-anim="anim-clip-up">All Questions Answered Right Here</h2>
                    <p className="text-lg text-slate-600">Understanding the security and mechanics of the MediChain free-stack MVP.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 delay-${idx * 80} ${openIdx === idx ? 'bg-slate-50 border-blue-100 shadow-sm' : 'bg-white border-slate-200'}`}
                            data-anim="anim-fade-up"
                        >
                            <button
                                className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none"
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                            >
                                <div className="flex gap-6 items-center">
                                    <span className="text-slate-400 font-mono font-bold text-lg">0{idx + 1}</span>
                                    <span className={`font-bold text-lg ${openIdx === idx ? 'text-blue-600' : 'text-slate-800'}`}>{faq.q}</span>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    {openIdx === idx ? <div className="w-3 h-0.5 bg-current"></div> : <div className="relative w-3 h-3"><div className="absolute top-1/2 left-0 w-3 h-0.5 bg-current -translate-y-1/2"></div><div className="absolute top-0 left-1/2 w-0.5 h-3 bg-current -translate-x-1/2"></div></div>}
                                </div>
                            </button>
                            <div
                                className={`px-6 pl-16 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-600 text-base leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
