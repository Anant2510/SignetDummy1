
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import Navigation from "../../component/Navigation"
import Footer from "@/component/Footer";
import FooterSubscribe from '@/component/FooterSubscribe'

export const metadata = {
  title: "Jamesallen",
  description: "Jamesallen project",
}; 

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="overflow-x-hidden">
        <Navigation />
        {children}
        <FooterSubscribe />
        <Footer />
      </body>
    </html>
  )
}