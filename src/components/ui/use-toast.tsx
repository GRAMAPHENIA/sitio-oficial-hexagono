"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface Toast {
  title: string;
  description: string;
  status: "success" | "error" | "info";
}

interface ToastContextType {
  addToast: (toast: Toast) => void;
  toasts: Toast[];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe ser utilizado dentro de un ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast, toasts }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              toast.status === "success"
                ? "bg-green-500 text-white"
                : toast.status === "error"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            <h4 className="font-bold">{toast.title}</h4>
            <p>{toast.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
