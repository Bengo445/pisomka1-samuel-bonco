// src/app/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
          <main style={{ flexGrow: 1 }}>
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}