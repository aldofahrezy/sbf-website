import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, ClipboardList } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-16 gap-4 bg-gradient-to-br from-slate-600 to-slate-800 text-white">
      <h1 className="text-h2">Sekolah BEM Fasilkom UI</h1>
      <h2 className="text-h3">Biro Bisnis dan Kemitraan</h2>
      <h2 className="text-h4 italic">Software Engineering</h2>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Link href="/tutorial/docs">
          <Button className="font-semibold w-full">
            Tutorials <SquareArrowOutUpRight />
          </Button>
        </Link>
        <Button className="font-semibold" disabled>
          Assignments <ClipboardList />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
