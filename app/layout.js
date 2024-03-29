import styles from "./page.module.css";
import "/app/globals.css";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Nunito } from "next/font/google";
import "./globals.css";

const Nunito_init = Nunito({
  weight: "500",
  subsets: ["latin-ext"],
  variable: "--font-nutino",
});
const Nunito_init_bold = Nunito({
  weight: "1000",
  subsets: ["latin-ext"],
  variable: "--font-nutino-bold",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${Nunito_init.variable} ${Nunito_init_bold.variable} `}
        style={{ maxWidth: "100%", overflowX: "hidden" }}
      >
        <div className="container_all">
          <Navbar />
          <div style={{ marginTop: "50px", minHeight: "100vh" }}>
            {" "}
            {children}
          </div>
          <Footer />{" "}
        </div>
      </body>
    </html>
  );
}
