import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <div className="py-12 bg-white relative pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl" data-anim="anim-scale-in">
                    {/* Abstract Backgrounds inside CTA */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight delay-200" data-anim="anim-fade-up">
                            Ready to take control of your medical history?
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 delay-300" data-anim="anim-fade-up">
                            Join thousands of patients and providers utilizing our free-stack Web3 medical infrastructure today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center delay-400" data-anim="anim-fade-up">
                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group w-full sm:w-auto">
                                Create Free Account
                                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md w-full sm:w-auto">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
