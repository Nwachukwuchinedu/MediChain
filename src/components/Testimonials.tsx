import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Michael Roberts",
            role: "Patient",
            text: "For the first time, I actually know who has access to my medical history. The ability to revoke access from my previous doctor instantly gave me incredible peace of mind.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Dr. Sarah Jenkins",
            role: "Pediatrician",
            text: "MediChain's zero-trust architecture is exactly what the industry needs. I can request access, view the IPFS-stored files securely, and the patient always stays in absolute control.",
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Elena Martinez",
            role: "Chronic Care Patient",
            text: "Having all my records in one decentralized vault means I don't have to carry physical folders to every new specialist. I just share a temporary key and they have everything they need.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
        }
    ];

    return (
        <div className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4" data-anim="anim-clip-up">What our users say</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto delay-100" data-anim="anim-fade-up">Hear from patients and healthcare providers who have embraced true data sovereignty.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 delay-${i * 150}`} data-anim="anim-scale-in">
                            <Quote className="absolute top-8 right-8 text-blue-100 w-12 h-12 rotate-180 transition-colors group-hover:text-blue-200" />
                            <div className="flex items-center gap-1 text-amber-400 mb-6">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-sm text-blue-600 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
