'use client';

import React, { createContext, useContext, useState, useEffect } from 'react'
import { FormData } from './schema'

/** @interface Toast - Describes a single notification bubble */
interface Toast {
  id: number;
  message: string;
  exiting: boolean;
}
interface ToastContextType {
  showToast: (message: string) => void;
}


const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {


    // this runs once before the first render, so unnecessary eslint >:( 
    const [toasts, setToasts] = useState<Toast[]>([]);  // toast for non browser alert 

    const showToast = (message: string) => {
        const id = Date.now();
        setToasts((prev) => [{ id, message, exiting: false }, ...prev]); 

        setTimeout(() => {
        setToasts((prev) => 
            prev.map((t: Toast) => t.id === id ? { ...t, exiting: true } : t));
        }, 2700);

        setTimeout(() => {
        setToasts((prev) => 
            prev.filter((t) => t.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
        
        {children}

        <div className="toast-container">
            {toasts.map((t, index) => (
                <div 
                key={t.id} 
                className={`toast-notification ${t.exiting ? 'exit' : ''}`}
                style={{ zIndex: toasts.length - index }}
                >
                    {t.message}
                </div>
            ))}
        </div>

        </ToastContext.Provider>

    );
};