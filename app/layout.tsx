import "./globals.scss";
import Providers from "@/components/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
