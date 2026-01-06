import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-slate-500 text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Saya Made Jaya Setiawan. All rights reserved.
                </div>
                <div className="flex space-x-6 text-slate-500 text-sm">
                    <p>Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
