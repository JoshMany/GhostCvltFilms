import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";

function Home() {
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
        <Hero />
        <Divider text={"JOIN THE CVLT"} />
        <Services />
        <div className="mx-8 my-12 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
            <p className="text-white text-3xl font-CooperHewittBook text-left uppercase align-text-bottom tracking-widest md:text-[40px] md:leading-[55px] md:w-1/2 lg:mt-12">
              Innovating and creating trends in the audiovisual industry, we
              make simple things unforgettable.
            </p>
            <button className="mt-4 text-white uppercase font-CooperHewittBook text-xl border border-yellow p-3 md:w-1/2 md:m-[90px] md:text-[20px] md:leading-[50px]">
              Discover more about us
            </button>
          </div>
        </div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
