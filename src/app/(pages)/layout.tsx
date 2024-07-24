import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Devlinks",
  description: "By Ebube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fbfafb]">
        {
          <NavBar/>}
        {children}
        </body>
    </html>
  );
}
