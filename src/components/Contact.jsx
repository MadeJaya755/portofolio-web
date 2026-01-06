import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400">Feel free to reach out for collaborations or just to say hi.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <motion.a
                        href="mailto:mjaya4929@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500 hover:shadow-lg transition-all group"
                    >
                        <div className="p-4 bg-slate-700/50 rounded-full mb-4 group-hover:bg-sky-500/20 transition-colors">
                            <Mail className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <p className="text-slate-400 group-hover:text-sky-400 transition-colors">mjaya4929@gmail.com</p>
                    </motion.a>

                    <motion.a
                        href="https://github.com/MadeJaya755"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500 hover:shadow-lg transition-all group"
                    >
                        <div className="p-4 bg-slate-700/50 rounded-full mb-4 group-hover:bg-sky-500/20 transition-colors">
                            <Github className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                        <p className="text-slate-400 group-hover:text-sky-400 transition-colors">MadeJaya755</p>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/made-jaya-setiawan-6600632a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500 hover:shadow-lg transition-all group"
                    >
                        <div className="p-4 bg-slate-700/50 rounded-full mb-4 group-hover:bg-sky-500/20 transition-colors">
                            <Linkedin className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                        <p className="text-slate-400 group-hover:text-sky-400 transition-colors">Connect with me</p>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
