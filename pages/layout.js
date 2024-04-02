import Navbar from "@/components/navbar";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}
