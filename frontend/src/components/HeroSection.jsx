import React, { useState, useEffect } from 'react';
import { Youtube, ArrowRight, ChevronDown, X, ThumbsUp, ThumbsDown, MessageCircle, Search, User } from 'lucide-react';

const TypewriterText = ({ words, speed = 70, deleteSpeed = 50, delay = 1500 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting) {
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                    return;
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delay]);

    return (
        <span>
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const CommentCard = ({ comment }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
            {/* Main Comment */}
            <div className="flex gap-3 mb-3">
                {/* Profile Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-500/80 to-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold text-sm border border-white/10">
                        {comment.author.charAt(0).toUpperCase()}
                    </div>
                </div>

                {/* Comment Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-blue-300 font-medium text-sm hover:text-blue-200 transition-colors">@{comment.author}</span>
                        <span className="text-gray-400 text-xs">{comment.date}</span>
                    </div>

                    <p className="text-white text-sm leading-relaxed mb-3 group-hover:text-gray-100 transition-colors">{comment.text}</p>

                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
                            <ThumbsUp size={14} />
                            <span>{comment.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
                            <ThumbsDown size={14} />
                            <span>{comment.dislikes}</span>
                        </div>
                        {comment.replies && comment.replies.length > 0 && (
                            <button
                                onClick={() => setShowReplies(!showReplies)}
                                className="flex items-center gap-1 text-blue-300 hover:text-blue-200 transition-colors"
                            >
                                <MessageCircle size={14} />
                                <span>{comment.replies.length} {comment.replies.length === 1 ? 'Reply' : 'Replies'}</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* AI Ask Button */}
                <div className="flex-shrink-0">
                    <button className="bg-gradient-to-r from-red-500 to-pink-600 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 border border-white/10">
                        Ask AI
                    </button>
                </div>
            </div>

            {/* Replies */}
            {showReplies && comment.replies && (
                <div className="ml-8 border-l-2 border-white/20 pl-4 space-y-3 animate-[slideDown_0.3s_ease-out]">
                    {comment.replies.map((reply, index) => (
                        <div key={index} className="flex gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-600/80 to-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium text-xs flex-shrink-0 border border-white/10">
                                {reply.author.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-blue-300 font-medium text-xs hover:text-blue-200 transition-colors">@{reply.author}</span>
                                    <span className="text-gray-400 text-xs">{reply.date}</span>
                                </div>
                                <p className="text-white text-xs leading-relaxed mb-2 hover:text-gray-100 transition-colors">{reply.text}</p>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                        <ThumbsUp size={12} />
                                        <span>{reply.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                        <ThumbsDown size={12} />
                                        <span>{reply.dislikes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const HeroSection = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isOpenSearchMenu, setIsOpenSearchMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const typewriterWords = [
        'Like Never Before',
        'Powered by Smart AI',
        'Tailored Just for You',
        'With Unmatched Precision',
        'Smarter. Faster. Better.',
    ];

    // Sample comment data
    const sampleComments = [
        {
            author: "TechGuru2024",
            date: "2 hours ago",
            text: "This is exactly what I was looking for! Amazing tutorial, helped me understand the concept completely.",
            likes: "1.2K",
            dislikes: "12",
            replies: [
                {
                    author: "CodeLearner",
                    date: "1 hour ago",
                    text: "Same here! The explanation was so clear and easy to follow.",
                    likes: "45",
                    dislikes: "2"
                },
                {
                    author: "WebDev_Pro",
                    date: "45 minutes ago",
                    text: "I've been struggling with this for weeks. This video saved me so much time!",
                    likes: "23",
                    dislikes: "0"
                }
            ]
        },
        {
            author: "CreativeDesigner",
            date: "5 hours ago",
            text: "The visual examples really helped me grasp the concepts. Great work on the presentation!",
            likes: "856",
            dislikes: "8",
            replies: []
        },
        {
            author: "StudentLife",
            date: "1 day ago",
            text: "Using this for my final project. The step-by-step breakdown is perfect for beginners like me.",
            likes: "432",
            dislikes: "5",
            replies: [
                {
                    author: "HelpfulMentor",
                    date: "20 hours ago",
                    text: "Good luck with your project! Make sure to practice the examples shown.",
                    likes: "67",
                    dislikes: "1"
                }
            ]
        }
    ];

    const openSearchMenu = () => {
        setIsOpenSearchMenu(true);
        document.body.style.overflow = 'hidden';
    };

    const closeSearchMenu = () => {
        setIsOpenSearchMenu(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse" style={{ animationDelay: '500ms' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-pink-300 bg-clip-text text-transparent leading-tight">
                            Find YouTube Comments
                            <span className="block text-3xl sm:text-4xl lg:text-6xl mt-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                <TypewriterText words={typewriterWords} />
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                            Search and discover similar comments across YouTube videos with our advanced AI-powered search engine.
                            Find the conversations that matter most to you.
                        </p>

                        {/* Search Interface */}
                        <div className="max-w-4xl mx-auto mb-12 space-y-4 px-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Paste YouTube video URL..."
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    className="w-full px-6 py-4 pr-12 bg-black/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                                    <Youtube className="text-red-500 opacity-50 w-5 h-5" />
                                </div>
                            </div>

                            <button
                                onClick={openSearchMenu}
                                className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center mx-auto space-x-2"
                            >
                                <span>Search Comments</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto px-4">
                            <div className="text-center group">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">1M+</div>
                                <div className="text-gray-400 text-sm sm:text-base">Comments Analyzed</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                                <div className="text-gray-400 text-sm sm:text-base">Videos Indexed</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
                                <div className="text-gray-400 text-sm sm:text-base">Accuracy Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="text-white/50 hover:text-red-500 transition-colors duration-300 cursor-pointer" size={32} />
                    </div>
                </div>
            </section>

            {/* Search Results Modal */}
            {isOpenSearchMenu && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeSearchMenu}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-4xl max-h-[90vh] mx-4 animate-[modalSlideIn_0.3s_ease-out]">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Header */}
                            <div className="p-4 sm:p-6 border-b border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white">Similar Comments</h2>
                                    <button
                                        onClick={closeSearchMenu}
                                        className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Search Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all duration-300 text-sm sm:text-base"
                                        placeholder="Enter your comment to find similar ones..."
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                </div>
                            </div>

                            {/* Comments List */}
                            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
                                <div className="space-y-4">
                                    {sampleComments.map((comment, index) => (
                                        <CommentCard key={index} comment={comment} />
                                    ))}
                                </div>

                                {/* Loading More Comments Indicator */}
                                <div className="text-center py-4">
                                    <button className="text-white/60 hover:text-white transition-colors text-sm">
                                        Load more comments...
                                    </button>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 sm:p-6 border-t border-white/10 bg-white/5">
                                <p className="text-center text-gray-400 text-xs sm:text-sm">
                                    Showing {sampleComments.length} similar comments • Powered by AI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default HeroSection;