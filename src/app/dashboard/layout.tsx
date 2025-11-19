export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-200 min-h-screen p-4">
        <h2 className="font-bold mb-4">Dashboard Menu</h2>
        <ul>
          <li className="mb-2">Analytics</li>
          <li className="mb-2">Settings</li>
          <li className="mb-2">Profile</li>
        </ul>
      </aside>

      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
