import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link"
import {
  Package2
} from "lucide-react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CBS Transaction Monitoring",
  description: "CBS Transaction Monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <div className="flex min-h-screen w-full flex-col">
                <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                  <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                      href="#"
                      className="hidden md:flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-foreground transition-colors hover:text-foreground"
                    >
                      CBS Transaction Monitoring
                    </Link> 
                  </nav> 
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                  {children}
                  </main>
                </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
