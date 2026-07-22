import React from "react"
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <h1>Main Layout</h1>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

