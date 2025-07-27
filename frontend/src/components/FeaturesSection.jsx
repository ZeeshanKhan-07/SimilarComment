import React from 'react';
import { Search, MessageCircle, Zap, Users, TrendingUp, Star } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "AI-Powered Search",
            description: "Advanced machine learning algorithms to find similar comments with incredible accuracy.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Lightning Fast",
            description: "Get results in milliseconds with our optimized search infrastructure.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Smart Filtering",
            description: "Filter by sentiment, date, popularity, and custom criteria.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Insights",
            description: "Understand audience reactions and trending topics in real-time.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Analytics Dashboard",
            description: "Comprehensive analytics to track comment trends and engagement.",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Premium Features",
            description: "Export results, API access, and advanced filtering options.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Everything you need to discover, analyze, and understand YouTube comments like never before.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 backdrop-blur-sm"
                        >
                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {feature.description}
                            </p>

                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;