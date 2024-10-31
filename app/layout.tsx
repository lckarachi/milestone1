export default function RootLayout({ children, } { children : React<ReactNode></ReactNode>}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}