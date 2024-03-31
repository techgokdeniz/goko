"use client";

import { Sun, Moon, Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Loader className="animate-spin" size={24} />;

  if (resolvedTheme === "dark") {
    return <Sun onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Moon onClick={() => setTheme("dark")} />;
  }
}
