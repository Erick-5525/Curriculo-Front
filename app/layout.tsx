import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfólio - Erick Ferreira",
  description: "Portfólio de projetos desenvolvidos em React e Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
