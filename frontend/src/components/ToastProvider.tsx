"use client";
import { Toaster } from "react-hot-toast";
import { colors, poppins } from "@/styles";
interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: colors.cardBackground,
              fontFamily: poppins.style.fontFamily,
              fontSize: "14px",
              color: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "white",
              secondary: colors.error,
            },
            style: {
              background: colors.error,
              fontFamily: poppins.style.fontFamily,
              fontSize: "14px",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}
