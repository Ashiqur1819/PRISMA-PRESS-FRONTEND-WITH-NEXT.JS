import React from "react"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <h1>Main Layout</h1>
        {children}
      </body>
    </html>
  );
}
=======
    <html>
      <body>{children}</body>
    </html>
  )
}
>>>>>>> a4c8e7e599af258bd9fcbbb7939c4e285d268de0
