import React from 'react';
import { FileCheck, Users, ShieldCheck, Activity } from 'lucide-react';

export const ImpactStats = () => {
    const stats = [
        { label: "Secured Records", value: "12,500+", icon: <FileCheck className="text-blue-500" size={24} /> },
        { label: "Active Patients", value: "8,200+", icon: <Users className="text-indigo-500" size={24} /> },
        { label: "Verified Providers", value: "350+", icon: <ShieldCheck className="text-teal-500" size={24} /> },
        { label: "Blockchain Uptime", value: "99.99%", icon: <Activity className="text-rose-500" size={24} /> },
    ];

    return (
        <div className="py-12 bg-white border-y border-slate-100 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-100">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            data-anim="anim-scale-in"
                            className={`flex flex-col items-center text-center delay-${idx * 100} ${idx !== 0 ? 'md:pl-8' : ''}`}
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</h4>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
