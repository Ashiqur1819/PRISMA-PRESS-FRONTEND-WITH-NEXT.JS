import React from "react"
import "./globals.css";

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
      </body>
    </html>
  );
}

