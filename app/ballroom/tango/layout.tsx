import BallroomLayout from "../layout.tsx";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section><BallroomLayout />{children}</section>
}
