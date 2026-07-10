import Background from "../background"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Background>{children}</Background>
}
