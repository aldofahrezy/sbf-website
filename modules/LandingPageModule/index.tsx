import Hero from "./sections/Hero";
import Values from "./sections/Values";

const LandingPageModule = () => {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <Hero />
      <Values />
    </main>
  );
};

export default LandingPageModule;
