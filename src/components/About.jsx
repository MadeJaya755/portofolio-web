import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-slate-300 leading-relaxed"
                    >
                        <p>
                            I am a Cyber Security Enthusiast with a strong foundation in physics and a passion for technology.
                            My journey involves a deep dive into both offensive and defensive security strategies, as well as
                            building secure, scalable applications.
                        </p>
                        <p>
                            With hands-on experience in penetration testing, I actively participate in laboratory challenges
                            like OverTheWire and PortSwigger Web Security Academy to sharpen my skills in identifying vulnerabilities
                            and exploiting potential security flaws.
                        </p>
                        <p>
                            Simultaneously, I have cultivated skills in full-stack development, allowing me to understand the
                            architecture of the systems I test, making my security assessments more comprehensive and effective.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500 transition-colors">
                            <ShieldCheck className="w-8 h-8 text-sky-500 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Penetration Testing</h3>
                            <p className="text-slate-400">Identifying vulnerabilities in web applications and networks using industry-standard methodologies.</p>
                        </div>

                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500 transition-colors">
                            <Server className="w-8 h-8 text-sky-500 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                            <p className="text-slate-400">Building robust applications with a security-first mindset using modern technologies.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
