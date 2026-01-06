import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-950 pt-16" id="hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium">
                            <Terminal className="w-4 h-4 mr-2" />
                            Cyber Security Enthusiast
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Hello, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                                Saya Made Jaya Setiawan
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-slate-400 font-light">
                            Penetration Tester | Full-Stack Developer
                        </h2>

                        <p className="text-slate-400 max-w-lg leading-relaxed">
                            Passionate about securing digital infrastructure and building robust applications.
                            Bridging the gap between offensive security and secure development.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors flex items-center"
                            >
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10">
                            <img
                                src="/myfoto.jpeg"
                                alt="Saya Made Jaya Setiawan"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Made+Jaya&background=0284c7&color=fff&size=512"; }}
                            />
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-sky-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-800 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
