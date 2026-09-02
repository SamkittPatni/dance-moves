import Background from "../../ui/universal/background"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Background>{children}</Background>
}