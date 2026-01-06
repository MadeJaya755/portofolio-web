import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const cert = {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        image: "/mysertif.jpg",
        verifyLink: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=ZI5IbNJ3Nga2lCNWyOqriKQUQkIFwx29oixpQRxI/Wk="
    };

    return (
        <section id="certifications" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-64 md:h-auto overflow-hidden relative group cursor-pointer" onClick={() => setSelectedCert(cert)}>
                            <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                    View Certificate
                                </span>
                            </div>
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://placehold.co/600x400/1e293b/cbd5e1?text=CEH+Certificate"; }}
                            />
                        </div>

                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center space-x-2 mb-4">
                                <Award className="w-6 h-6 text-sky-500" />
                                <span className="text-sky-500 font-semibold tracking-wider text-sm uppercase">Professional Cert</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-slate-400 mb-6">Issued by {cert.provider}</p>

                            <a
                                href={cert.verifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                            >
                                Verify Credential <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal for viewing certificate */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.name}
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
