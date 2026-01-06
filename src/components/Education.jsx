import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code } from 'lucide-react';

const Education = () => {
    const items = [
        {
            type: 'Degree',
            title: 'Bachelor of Science in Physics',
            institution: 'Universitas Lampung',
            icon: <GraduationCap className="w-6 h-6 text-sky-500" />,
            year: 'Graduated'
        },
        {
            type: 'Certification Course',
            title: 'Certified Ethical Hacker (CEH)',
            institution: 'Course-Net',
            icon: <BookOpen className="w-6 h-6 text-sky-500" />,
            year: 'Specialized Training'
        },
        {
            type: 'Independent Studies',
            title: 'Offensive Security & Practical Labs',
            institution: 'Self-Paced Learning',
            icon: <Code className="w-6 h-6 text-sky-500" />,
            year: 'Ongoing'
        },
        {
            type: 'Development',
            title: 'Front-End & Back-End Development',
            institution: 'Dicoding',
            icon: <Code className="w-6 h-6 text-sky-500" />,
            year: 'Completed'
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Education & Training</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-sky-500 text-sm font-medium tracking-wide uppercase">{item.type}</span>
                                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                                    <div className="flex justify-between items-center text-slate-400">
                                        <span className="font-medium">{item.institution}</span>
                                        <span className="text-sm bg-slate-800 px-2 py-1 rounded border border-slate-700">{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
