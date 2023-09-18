import { getData } from "./api/getData";
import "./globals.css";
import { Inter } from "next/font/google";

import bg from '../../public/background-img.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'lalmohan collage',
  description: 'lalmohan collage web site',
}

export default async function RootLayout({ children }) {
  const data = await getData()
  const backgroundData = JSON.parse(data.web_presets)
  const backgroundImage = backgroundData.background_img;
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage:`url(${bg.src})`}}>
        <div></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
