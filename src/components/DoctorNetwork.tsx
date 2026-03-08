import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export const DoctorNetwork = () => {
    const doctors = [
        {
            name: "Dr. Samuel Kim",
            specialty: "Cardiologist",
            consults: "600+ Consults",
            img: "https://images.unsplash.com/photo-1612349317150-e410f624c4a4?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Dr. Emily Davis",
            specialty: "Dermatologist",
            consults: "450+ Consults",
            img: "https://images.unsplash.com/photo-1594824406936-8040d6a5040d?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Dr. Alex Chen",
            specialty: "Neurologist",
            consults: "300+ Consults",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Dr. Sarah Jenkins",
            specialty: "Pediatrician",
            consults: "800+ Consults",
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
        }
    ];

    return (
        <div id="network" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4" data-anim="anim-fade-up">Leading with Heart & Expertise.</h2>
                <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto delay-100" data-anim="anim-fade-up">Access a decentralized network of verified healthcare professionals who respect your data privacy and sovereignty.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className={`bg-slate-50 rounded-[2rem] p-4 border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-left delay-${idx * 150}`} data-anim="anim-fade-up">
                            <img src={doc.img} alt={doc.name} className="w-full h-64 object-cover rounded-[1.5rem] mb-6" />
                            <div className="px-2 pb-2">
                                <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                                <p className="text-blue-600 font-medium text-sm mb-4">{doc.specialty}</p>
                                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {doc.consults} via MediChain
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 delay-200" data-anim="anim-fade-up">
                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 mx-auto group">
                        View All Doctors <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};
