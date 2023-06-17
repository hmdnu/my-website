import "../public/css/globals.css";
import { Poppins } from "next/font/google";
import { Nav, Footer, GoTop } from "@/components";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-poppins",
});

export const metadata = {
  title: "hamdan.u",
  description:
    "Hello my name is Hamdan Ubaidillah and this is my personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="dark:bg-dark">
        <Nav />
        {children}
        <GoTop />
        <Footer />
      </body>
    </html>
  );
}
