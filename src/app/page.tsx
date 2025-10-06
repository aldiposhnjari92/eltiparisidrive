import Logo from "@/components/logo";
import DashboardView from "@/pages/dashboardView";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <header className="flex items-center justify-between h-16 px-4 border-b border-slate-200 sticky top-0 bg-white z-10">
        <Logo />
      </header>
      <main className="flex-grow overflow-auto px-4 pt-4 pb-32">
        <DashboardView />
      </main>
    </div>
  );
}
