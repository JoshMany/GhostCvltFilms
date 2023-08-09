import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";

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
        <div className="pt-16 mx-8">
          <h1 className="text-yellow font-UrbanistSemibold uppercase text-[50px]">
            About the cvlt
          </h1>
          <p className="text-white uppercase font-CooperHewittMedium text-3xl mb-12 tracking-wider leading-normal align-baseline">
            Welcome to <b className="text-yellow ">Ghost Cvlt</b>, where
            imagination finds its cinematic home. We&apos;re a collective of
            visual storytellers, merging the art of filmmaking with the magic of
            storytelling. Behind our enigmatic doors, filmmakers, designers, and
            sound artists unite, driven by a shared purpose: to break the
            boundaries of imagination. With each project, we weave emotion and
            creativity into visual tapestries, turning concepts into
            masterpieces on screen. At <b className="text-yellow">Ghost Cvlt</b>
            , we believe in the power of every frame, sound, and moment. We dive
            into stories, challenge them, and enrich them with our distinct
            perspective. Our commitment goes beyond visuals – we aim to forge
            emotional connections that resonate with every viewer. We&apos;re
            explorers of visual realms, dream weavers, and narrative masters.{" "}
            <b className="text-yellow">Ghost Cvlt</b> isn&apos;t just a
            production house; we&apos;re architects of immersive experiences
            that leave indelible marks on minds and hearts. Welcome to a world
            of unleashed creativity and emotions in motion.
          </p>
        </div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default About;
