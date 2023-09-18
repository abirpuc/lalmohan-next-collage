import { getData } from "./api/getData";
import Footer from "./component/shared/Footer/Footer";
import NaVBar from "./component/shared/Navbar/NaVBar";
import TopBanner from "./component/shared/TopBanner/TopBanner";
import TopNav from "./component/shared/TopNav/TopNav";
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
          <TopNav/>
          <TopBanner/>
          <NaVBar/>
        </div>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
