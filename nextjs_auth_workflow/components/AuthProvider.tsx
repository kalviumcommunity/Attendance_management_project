// AuthProvider Component
// Will wrap the application with NextAuth's SessionProvider.
// This ensures that authentication state is available throughout the app.

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Wrap children with <SessionProvider> once NextAuth is set up
  return <>{children}</>;
}
