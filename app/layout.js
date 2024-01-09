import { Inter } from "next/font/google";
import "./globals.css";
import SideNavigation from "./components/SideNavigation";
import PageWrapper from "./components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <SideNavigation />
        <PageWrapper>{children} </PageWrapper>
      </body>
    </html>
  );
}
