import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhrodeep Acharya — Software Developer",
  description:
    "Freelance Software Developer specializing in React, Next.js, Node.js and full-stack web development. Available for new projects.",
  keywords: ["software developer", "freelance", "react", "nextjs", "nodejs", "full stack"],
  authors: [{ name: "Subhrodeep Acharya" }],
  openGraph: {
    title: "Subhrodeep Acharya — Software Developer",
    description: "Crafting elegant digital experiences. Available for freelance work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
