import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

// Configure Prompt from Google Fonts
const promptFont = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Bon Bread | The Family Choice",
  description: "Premium bread and pastries across Abuja.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${promptFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
