import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Workflow from "@/components/workflow";
import CallToAction from "@/components/call-to-action";
import JoinUs from "@/components/join-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Workflow />
        <CallToAction />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
