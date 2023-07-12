import ModalProvider from "../providers/ModalProvider";
import QueryProvider from "../providers/QueryProvider";
import ToastProvider from "../providers/ToastProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Store - Next.js",
  description: "Store - Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
