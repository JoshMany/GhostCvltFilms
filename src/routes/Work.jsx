import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import { ReactFitty } from "react-fitty";

function Work() {
  const Divider = ({ text }) => {
    return (
      <>
        <div className="bg-yellow">
          <Marquee>
            <p className="font-UrbanistSemibold whitespace-nowrap uppercase flex flex-row items-center text-3xl md:text-[80px] md:h-[70px] overflow-hidden">
              <p>{`${text}⠀⠀⠀`}</p>
              <p>{`${text}⠀⠀⠀`}</p>
              <p>{`${text}⠀⠀⠀`}</p>
              <p>{`${text}⠀⠀⠀`}</p>
              <p>{`${text}⠀⠀⠀`}</p>
              <p>{`${text}⠀⠀⠀`}</p>
            </p>
          </Marquee>
        </div>
      </>
    );
  };

  const GridElement = ({ title, type }) => {
    return (
      <div className="aspect-video border text-white text-xl">
        <p>{type}</p>
        <p>{title}</p>
      </div>
    );
  };

  return (
    <>
      <div className="relative">
        <Topbar />
        <div className="pt-14 px-4 flex flex-col w-full h-full">
          <div className="text-white uppercase flex-1 font-CooperHewittBook block lg:hidden">
            <ReactFitty>Our Work</ReactFitty>
          </div>
          <div className="text-white uppercase w-full h-min font-CooperHewittBook hidden lg:block">
            <h1 className="text-[140px]">Our Work</h1>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-4 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <GridElement title={"Uno"} type={"Uno"} />
            <GridElement title={"Uno"} type={"Uno"} />
            <GridElement title={"Uno"} type={"Uno"} />
            <div className="aspect-video h-min w-full">
              <ReactFitty
                wrapText={true}
                className="text-white font-CooperHewittBook text-3xl text-right tracking-wide leading-tight sm:leading-snug"
              >
                Unleash your <b className="text-yellow">creativity</b> <br />
                with our top-notch <br />
                audiovisual production. <br />
                Bring your ideas to <b className="text-fuchsia-500">life</b>!
              </ReactFitty>
            </div>
            <GridElement title={"Uno"} type={"Uno"} />
            <GridElement title={"Uno"} type={"Uno"} />
            <GridElement title={"Uno"} type={"Uno"} />
            <GridElement title={"Uno"} type={"Uno"} />
          </div>
        </div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default Work;
