import { Sidebar } from "../components/sidebar";
import { Toaster } from "@/components/ui/toaster"


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        {children}
        <Toaster />
      </div>
    </div>
  )
}
