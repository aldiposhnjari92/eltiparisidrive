"use client";

import Header from "@/components/header";
import DashboardView from "@/pages/dashboardView";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {isSignedIn ? (
        <>
          <Header />
          <main className="flex-grow overflow-auto px-4 pt-4 pb-32">
            <DashboardView />
          </main>
        </>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl">
            Aplikacioni eshte duke u hapur
          </h1>
          <span className="mb-4">Ju lutem prisni</span>
          <LoaderCircle className="animate-spin"/>
        </div>
      )}
    </div>
  );
}
