// Navbar Component
// Displays navigation links and login/logout buttons.
// In the future, it will check authentication state to show the right buttons.

export default function Navbar() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/login">Login</a> |{" "}
      <a href="/dashboard">Dashboard</a>
      {/* TODO: Replace with auth-aware login/logout buttons */}
    </nav>
  );
}
