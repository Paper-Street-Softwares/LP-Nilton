import { Suspense } from "react";
import WhatsappFloatingButton from "../components/buttons/WhatsappFloatingButton";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import React from "react";

const About = React.lazy(() => import("../sections/About"));
const Cta = React.lazy(() => import("../sections/Cta"));
const Features = React.lazy(() => import("../sections/Features"));
const Transformacao = React.lazy(() => import("../sections/Transformacao"));

export default function Index() {
  return (
    <>
      <Hero imagemFocadaBackground={true} />
      <main>
        <Suspense fallback={<div className="h-screen bg-white"></div>}>
          <Features />
          <Transformacao />
          <Cta />
          <About />
        </Suspense>
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
