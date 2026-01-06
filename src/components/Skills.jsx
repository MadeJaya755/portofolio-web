import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Vulnerability Assessment": [
            "OWASP Top 10",
            "Injection Vulnerabilities",
            "Auth & Session Management",
            "Business Logic Flaws",
            "XSS & CSRF"
        ],
        "Offensive Security": [
            "Linux Privilege Escalation",
            "Network Reconnaissance",
            "Burp Suite",
            "Metasploit",
            "CTF Problem Solving"
        ],
        "Development": [
            "React.js",
            "Node.js",
            "Python / Scripting",
            "HTML5 & CSS3",
            "Git & GitHub"
        ]
    };

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-sky-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-slate-200 mb-6 pb-2 border-b border-slate-800">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-400">
                                        <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
