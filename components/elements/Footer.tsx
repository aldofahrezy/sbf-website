import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-64 bg-slate-900 text-s3 px-8 py-8 border-t border-slate-950 text-white">
      <div>
        Biro Bisnis dan Kemitraan BEM Fasilkom UI © 2025 - All Rights Reserved.
        <div className="flex mt-4">
          <div className="relative w-30 h-30">
            <Image src="/images/logo-bem.svg" alt="logo" fill />
          </div>
          <div className="relative w-30 h-30">
            <Image src="/images/bismit.svg" alt="logo" fill />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
