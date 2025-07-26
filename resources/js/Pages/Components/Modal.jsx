import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, message, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 200);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all duration-200 ${isAnimating ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-0'
                }`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-200 ${isAnimating
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className={`text-xl font-semibold text-gray-800 transition-all duration-300 ${isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}>
                        {title || 'Modal Title'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {message && (
                        <p className={`text-gray-600 leading-relaxed mb-4 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            {message}
                        </p>
                    )}
                    <div className={`transition-all duration-500 delay-200 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <div className={`flex justify-end gap-3 p-6 pt-0 transition-all duration-500 delay-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 font-medium hover:scale-105 hover:shadow-lg"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal