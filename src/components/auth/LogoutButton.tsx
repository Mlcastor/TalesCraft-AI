"use client";

import { logout } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      // The logout action will handle redirect, so we don't need navigation logic here
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoggingOut}
      variant="ghost"
      className="text-sm"
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </Button>
  );
}
