import React from "react";
import "./styles.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Arkidava Mobili",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className="m-0 bg-white">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
