import ReactCurvedText from "react-curved-text";
import { ReactFitty } from "react-fitty";

export default function Footer() {
  return (
    <div className="mx-4 text-white my-4">
      <div
        id="ScaleText"
        className="relative font-CooperHewittBook uppercase justify-center flex flex-col"
      >
        <ReactFitty> Let&apos;s Talk</ReactFitty>
      </div>

      <div className="relative">
        <div className="relative flex flex-col w-full">
          <div className="relative flex font-CooperHewittBook whitespace-nowrap uppercase text-2xl lg:w-1/2 justify-center">
            <ReactFitty className="self-center">
              And create something Amazing
            </ReactFitty>
          </div>
          <div className="flex flex-col md:justify-between md:flex-row-reverse">
            <div className="relative flex self-center justify-center items-center h-60 w-48 md:mr-10 md:overflow-hidden">
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
                svgProps={{
                  className: "absolute animate-spin-slow-25",
                }}
              />
              <img
                src="/arrow.svg"
                alt="ArrowIcon"
                className="bg-white rounded-full w-[110px]"
              />
            </div>
            <div className="flex flex-col md:justify-center ">
              <p className="font-UrbanistLight text-lg md:text-2xl">
                contact@ghostcvlt.com
              </p>
              <p className="font-UrbanistLight text-lg md:text-2xl">
                (55)213 591 2049
              </p>
              <p className="font-UrbanistLight text-lg md:text-2xl">
                23 Revolucion Street, CDMX, 12412
              </p>
            </div>
          </div>
        </div>
      </div>
      <script src="fitty.min.js"></script>
    </div>
  );
}
