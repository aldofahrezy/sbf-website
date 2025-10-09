import Image from "next/image";

const Values = () => {
  return (
    <section className="grow flex justify-center items-center gap-24 py-24">
      <div className="flex flex-col items-center w-96">
        <h1 className="text-s2">Mudah Diikuti</h1>
        <p className="text-center text-b2">
          Pembelajaran <span className="italic"> Software Engineering </span>{" "}
          melalu SBF Bismit sangat cocok bagi kamu yang masih belum punya basic
          alias nol pengalaman di bidang Web Development. Karena mudah diikuti
          dan terinspirasi dari kurikulum Fasilkom lho!
        </p>
        <div className="relative w-72 h-72">
          <Image
            src="/images/easy-to-use.png"
            alt="easy"
            fill
            className="object-contain bottom-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-96">
        <h1 className="text-s2">Fokus ke Praktik</h1>
        <p className="text-center text-b2">
          Di sini kamu akan berfokus kepada penerapan (hands-on) proyek-proyek
          Website tanpa perlu mendalami teori yang bikin kamu pusing, namun
          tetap relevan dan sesuai dengan{" "}
          <span className="italic">best practice</span>.
        </p>
        <div className="relative w-72 h-72">
          <Image
            src="/images/focus.png"
            alt="focus"
            fill
            className="object-contain bottom-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-96">
        <h1 className="text-s2">Relevan</h1>
        <p className="text-center text-b2">
          Materi serta tech stack yang dibawakan dalam internal class di SBF
          Bismit ini juga relevan dengan keperluan organisasi maupun kepanitiaan
          yang ada di Fasilkom lho! Ini bisa jadi langkah awalmu untuk jadi
          bagian dari BEM Fasilkom UI, Ristek, Compfest, dan lainnya!
        </p>
        <div className="relative w-72 h-72">
          <Image
            src="/images/relevant.png"
            alt="relevant"
            fill
            className="object-contain bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
