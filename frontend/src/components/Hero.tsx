import videoSrc from '../assets/b019436c624bb3a6302352935e51d7db4cb66a37.mov';

const Hero = () => (
  <section className="flex flex-col items-center mt-20 pt-10 px-8 pb-8">

    {/* Brand Text and Copyright */}
    <div className="flex justify-between items-center w-full max-w-7xl mt-0">
      <h1 className="text-2xl sm:text-8xl tracking-wide">Eclypse<sup className="text-sm sm:text-4xl align-super">®</sup></h1>
    </div>

    <p className="text-sm text-right w-full max-w-7xl mt-2">© 2025</p>

    {/* Video Section */}
    <div className="w-full max-w-7xl relative mt-4">
      <video
        className="w-full h-[500px] rounded-lg object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 rounded-lg" />

      {/* Text on Video */}
      <p className="absolute bottom-6 right-8 text-white text-3xl sm:text-4xl z-10">
        A silhouette worth remembering
      </p>
    </div>

    <div className="w-full max-w-7xl pl-0 py-24">
        <p className="text-left text-lg sm:text-5xl font-light leading-tight tracking-tight">
            Rooted in a philosophy of quiet luxury, our<br />
            garments are designed to speak softly in<br />
            cut, in movement, in presence.
        </p>

        <a
            href="#"
            className="mt-16 inline-block text-left text-base sm:text-3xl underline font-light tracking-tight transition-all duration-300 hover:bg-white hover:scale-105 hover:text-black px-2 py-1 rounded"
        >
        <span className="group relative inline-block">
            Learn more from Eclypse
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0"> →</span>
        </span>
        </a>

    </div>

  </section>
);

export default Hero;
