// src/app/layout.tsx

import AuthProvider from "@/components/AuthProvider";
import NavigationMenu from "@/components/NavigationMenu";
import NavMenu from "@/components/NavigationMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body>
        <NavigationMenu/>
        <div style={{minHeight: "0vh", display: "flex", flexDirection: "column"}}>
          <main style={{ flexGrow: 0 }}>
          {children}
          </main>
        </div>
      </body>
        
        </AuthProvider>
    </html>
  );
}