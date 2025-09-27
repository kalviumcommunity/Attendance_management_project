// Protected Dashboard Page
// This page should only be accessible to authenticated users.
// In the future, we will protect it using NextAuth session logic.

export default function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected page. Users must be logged in to see this.</p>
    </div>
  );
}
