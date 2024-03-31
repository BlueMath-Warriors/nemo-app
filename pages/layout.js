import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
