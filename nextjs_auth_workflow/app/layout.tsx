// Root Layout
// This is the main layout for the application.
// It wraps all pages and can include global providers (like NextAuth's SessionProvider later).
// It also imports global styles.

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Add <AuthProvider> wrapper here in future */}
        {children}
      </body>
    </html>
  );
}
