import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { portfolioData } from "../data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.headline,
  keywords: [
    "Genta Abdi Fathir",
    "Backend Developer",
    "Fresh Graduate",
    "Laravel 12",
    "PHP 8.2",
    "MySQL",
    "REST API",
    "SimRisk",
    "Spatie RBAC",
    "JWT SSO",
    "Universitas Negeri Jakarta",
    "Portfolio Developer Indonesia",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
