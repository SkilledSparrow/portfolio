import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jade-six-36.vercel.app/"),

  title: "Abhishek",
  authors: {
    name: "chensokheng",
  },

  description:
    "I'm a fullstack developer Crafting Engaging User Experiences with Creative Web Solutions.",
  openGraph: {
    title: "Abhishek",
    description:
      "I'm a fullstack developer Crafting Engaging User Experiences with Creative Web Solutions.",
    url: "https://portfolio-jade-six-36.vercel.app/",
    siteName: "Abhishek",
    images: "/og.jpeg",
    type: "website",
  },
  keywords: ["full stack developer", "Abhishek", "full stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
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
