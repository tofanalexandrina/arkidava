import React from 'react'
import './styles.css'
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body classname="m-0 bg-white">
        <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
