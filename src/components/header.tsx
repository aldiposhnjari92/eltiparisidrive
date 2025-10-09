"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import Logo from "./logo";
import { Button } from "./ui/button";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="flex items-center justify-between h-16 px-4 border-b border-slate-200 sticky top-0 bg-white z-10">
      <Logo />
      {isSignedIn && (
        <SignOutButton>
          <Button variant={'outline'} className="border-blue-500">Dil nga sistemi</Button>
        </SignOutButton>
      )}
    </header>
  );
};

export default Header;
