export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-widest animate-pulse">
          عمار الحاج
        </h1>

        <p className="text-xl md:text-2xl text-green-300 mb-6">
          Cyber Security Specialist
        </p>

        <p className="max-w-2xl text-gray-400 leading-8">
          متخصص في الأمن السيبراني واكتشاف الثغرات الأمنية مع خبرة في اكتشاف أكثر من 100 ثغرة.
        </p>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gray-950">
        <h2 className="text-4xl font-bold mb-8 border-b border-green-500 inline-block pb-2">
          من أنا
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          أنا عمار الحاج من ريمة، مهتم بعالم الأمن السيبراني واختبار الاختراق وتحليل الثغرات الأمنية.
        </p>
      </section>

      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-8 border-b border-green-500 inline-block pb-2">
          التواصل
        </h2>

        <a href="tel:0780237569" className="text-2xl text-green-400">
          0780237569
        </a>
      </section>
    </div>
  );
}
