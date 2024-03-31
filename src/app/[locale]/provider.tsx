"use client";

import { ThemeProvider } from "next-themes";

type ProviderProps = {
  children: React.ReactNode;
};

export default function ClientProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
