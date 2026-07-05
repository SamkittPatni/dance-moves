import Background from "../background.tsx"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Background>{children}</Background>
}
