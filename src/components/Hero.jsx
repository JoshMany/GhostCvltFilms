import ReactCurvedText from "react-curved-text";

export default function Hero() {
  return (
    <>
      <header className="relative flex h-screen overflow-hidden z-0 text-white">
        <div className="relative mx-8 z-20 flex flex-col sm:my-24 sm:flex-1 sm:w-screen sm:items-center md:my-32  lg:mx-[100px]">
          <div className="relative flex-1">
            <p className="font-CooperHewittBook uppercase text-[65px] leading-[65px] mt-14 sm:mt-0 sm:align-bottom sm:w-full md:w-[500px] md:leading-[80px] md:text-left md:whitespace-pre-line">
              Amazing content for amazing brands.
            </p>
          </div>
          <div className="relative flex-1 h-min flex justify-end">
            <p className="text-[20px] leading-[30px] uppercase mt-4 text-right sm:mt-24 sm:w-[300px] md:mt-24 align-middle">
              We are a production company located in mexico city
            </p>
          </div>

          <div className="relative flex-1 flex justify-center items-center pb-12">
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
              className="bg-transparent rounded-full border border-white"
            />
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </header>
    </>
  );
}
