"use client";
import { useState } from "react";
import { SidebarIcon, SidebarClose } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/elements/Footer";
import TutorialSidebar from "@/modules/TutorialModule/components/TutorialSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <TutorialSidebar />
      <main className="flex flex-col items-end w-full ">
        <div
          className={`ease-linear duration-300 transition-all relative pt-20 ${
            isSidebarOpen ? "w-[calc(100%-16rem)]" : "w-full"
          }`}
        >
          <div className="pt-10 px-24">
            <div
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="fixed text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700 p-2 rounded-r-lg -translate-x-24 cursor-pointer transition-colors"
            >
              {isSidebarOpen ? <SidebarClose /> : <SidebarIcon />}
            </div>
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </SidebarProvider>
  );
}
