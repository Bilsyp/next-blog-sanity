import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Blog Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}