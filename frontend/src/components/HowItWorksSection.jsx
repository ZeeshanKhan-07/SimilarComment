import React from 'react';
import { Youtube, Search, MessageCircle } from 'lucide-react';

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            title: "Paste Video URL",
            description: "Simply paste any YouTube video URL into our search box.",
            icon: <Youtube className="w-12 h-12" />
        },
        {
            number: "02",
            title: "Describe Your Search",
            description: "Tell us what kind of comments you're looking for using natural language.",
            icon: <Search className="w-12 h-12" />
        },
        {
            number: "03",
            title: "Get Smart Results",
            description: "Our AI analyzes and returns the most relevant similar comments instantly.",
            icon: <MessageCircle className="w-12 h-12" />
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Three simple steps to discover the comments you're looking for across any YouTube video.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/20 via-pink-500/40 to-red-500/20 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center group">
                                <div className="relative mb-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                                        {step.number}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-full opacity-20 group-hover:animate-ping"></div>
                                </div>

                                <div className="inline-flex p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 mb-6 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-105">
                                    <div className="text-red-500 group-hover:text-red-400 transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto group-hover:text-gray-300 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;