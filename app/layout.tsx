import { Navbar } from "@/components/layout/Navbar";
import "./globals.scss";
import Providers from "@/components/providers/Providers";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <Providers>
          <Navbar />
          
          <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
