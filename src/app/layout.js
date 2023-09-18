import { getData } from "./api/getData";
import "./globals.css";
import { Inter } from "next/font/google";

// import bg from '../../public/background-img.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'lalmohan collage',
  description: 'lalmohan collage web site',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* style={{backgroundImage:`url(${bg.src})`}} */}
      <body className={inter.className} >
        <div>
          
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
