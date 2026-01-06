import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, ShieldAlert, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "OverTheWire Wargames",
            description: "Completed extensive offensive security challenges including Bandit (Level 26), Natas (Level 26), Krypton, and Leviathan. Focused on linux basics, web security, and cryptography.",
            tags: ["Linux", "Bash", "Cryptography", "Web Security"],
            link: "https://github.com/MadeJaya755/Overthewire-ctf",
            icon: <Terminal className="w-8 h-8 text-sky-500" />
        },
        {
            title: "PortSwigger Web Security",
            description: "Completed 170+ labs ranging from Beginner to Expert levels. Extensive practice in SQL Injection, XSS, CSRF, and logic vulnerabilities.",
            tags: ["OWASP Top 10", "Burp Suite", "Web Exploitation"],
            link: "https://github.com/MadeJaya755/portswigger-web-security-academy",
            icon: <ShieldAlert className="w-8 h-8 text-sky-500" />
        },
        {
            title: "RickdiculouslyEasy Assessment",
            description: "Conducted a full vulnerability assessment and penetration test on a vulnerable VM. Documented findings and exploitation paths.",
            tags: ["Penetration Testing", "Privilege Escalation", "Reconnaissance"],
            link: "https://github.com/MadeJaya755/Rickdiculously-easy-security-assessment",
            icon: <Lock className="w-8 h-8 text-sky-500" />
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Projects & Labs</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400">Practical application of security concepts through labs and assessments.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-all hover:-translate-y-1 group"
                        >
                            <div className="p-6">
                                <div className="mb-4">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-4 h-24 overflow-hidden">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-900 text-slate-300 text-xs rounded border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sky-500 hover:text-sky-400 transition-colors font-medium"
                                >
                                    View on GitHub <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
