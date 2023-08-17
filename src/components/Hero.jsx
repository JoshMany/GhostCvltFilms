import ReactCurvedText from "react-curved-text";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <header className="relative flex h-screen overflow-hidden z-0 text-white">
        <div className="relative mx-8 z-20 flex flex-col w-full">
          <div className="relative flex-1">
            <p className="font-CooperHewittBook uppercase text-[65px] leading-[65px] mt-14 sm:w-[530px] md:w-[640px] md:text-[75px] md:mt-20">
              Amazing content for amazing brands.
            </p>
          </div>
          <div className="relative flex-1 h-min flex justify-end lg:justify-start">
            <p className="text-[20px] leading-[30px] uppercase mt-4 text-right align-middle sm:w-[280px] sm:text-[25px] sm:align-baseline sm:mt-24 lg:text-left lg:mt-0">
              We are a production company located in mexico city
            </p>
          </div>

          <div className="relative flex-1 flex justify-center items-center mb-12 lg:justify-end">
            <Link
              to="/contact"
              className="relative flex-1 flex justify-center items-center lg:justify-end"
            >
              <ReactCurvedText
                width={200}
                height={200}
                cx={100}
                cy={100}
                rx={50}
                ry={50}
                startOffset="0"
                reversed={true}
                text="CONTACT US⠀⠀CONTACT US⠀⠀"
                textProps={{ style: { fontSize: 22 } }}
                textPathProps={{ fill: "#fff" }}
                tspanProps={{ dy: "-20" }}
                ellipseProps={null}
                svgProps={{ className: "absolute animate-spin-slow-25" }}
              />
              <img
                src="/arrow.svg"
                alt="ArrowIcon"
                className="bg-white rounded-full w-[110px] lg:mr-11"
              />
            </Link>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 left-1/2 "
        >
          <source src="/ghostvideo.mp4" type="video/mp4" />
        </video>
      </header>
    </>
  );
}
