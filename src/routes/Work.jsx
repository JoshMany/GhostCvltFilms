import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import { ReactFitty } from "react-fitty";
import YouTube from "react-youtube";

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

  const YoutubeEmbed = ({ embedId }) => (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="w-full h-full"
      />
    </div>
  );

  const videosIds = [
    "0zGAEU2XMYs",
    "USqtuBbb3H8",
    "xBmAPZb1X4g",
    "ymu8Tq8lvVA",
  ];

  return (
    <>
      <div className="relative">
        <Topbar />
        <div className="pt-14 px-4 flex flex-col w-full h-full">
          <div className="text-white uppercase w-full font-CooperHewittBook block lg:hidden">
            <ReactFitty>Our Work</ReactFitty>
          </div>
          <div className="text-white uppercase w-full h-auto font-CooperHewittBook hidden lg:block">
            <h1 className="text-[140px] my-4">Our Work</h1>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-4 mb-8 md:grid-cols-2">
            <YoutubeEmbed embedId={videosIds[0]} />
            <YoutubeEmbed embedId={videosIds[1]} />
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
            <YoutubeEmbed embedId={videosIds[2]} />
            <YoutubeEmbed embedId={videosIds[3]} />
          </div>
        </div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default Work;
