import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed flex left-0 right-0 h-20 mx-auto max-w-[1920px] bg-slate-900 text-white justify-between items-center px-8 border-b border-slate-950 z-[9999]">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image src="/images/bismit.svg" alt="logo" fill />
          </div>
          <p className="text-s3">SBF Bismit 2025</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
