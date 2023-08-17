import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import { Textfit } from "react-textfit";

function About() {
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

  return (
    <>
      <div className="relative">
        <Topbar />
        <div className="pt-16 mx-0">
          <div className="relative h-screen flex flex-col md:flex-row md:justify-center">
            <div className="w-full aspect-square border my-6 text-white flex md:w-1/2 md:aspect-auto">
              <p className="m-auto">Image</p>
            </div>
            <h1 className="relative flex-1 text-yellow font-UrbanistSemibold uppercase mx-8 md:w-1/2 md:self-stretch md:h-auto md:mx-4">
              <Textfit mode="multi" className="h-full">
                We build creative content to connect with your audience
              </Textfit>
            </h1>
          </div>

          <p className="relative text-white uppercase font-CooperHewittMedium text-2xl mb-12 tracking-wider leading-normal align-baseline mx-8">
            At <b className="text-yellow">Ghost Cvlt</b>, our creative family is
            diverse and passionate. From dedicated filmmakers and innovative
            graphic designers to seasoned sound artists and exceptional visual
            storytellers, everyone shares a unified vision of bringing
            captivating stories and high-quality audiovisual content to life.
            Our team is an eclectic mix of talents, each bringing their unique
            perspective to weave an enriching visual narrative.
          </p>
        </div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default About;
