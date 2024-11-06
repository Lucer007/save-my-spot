import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <h1>Hello from the dashboard layout</h1>
    </div>
  );
}
