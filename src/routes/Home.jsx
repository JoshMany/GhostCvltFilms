import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";

function Home() {
  const Divider = ({ text }) => {
    return (
      <>
        <div className="bg-[#FDD923] flex justify-start items-center sm:h-[50px] md:h-[60px]">
          <Marquee>
            <p className="font-UrbanistSemibold whitespace-nowrap uppercase flex flex-row items-center text-3xl sm:text-[40px] md:text-[60px] md:h-[70px] overflow-hidden">
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
      <div className="relative h-full">
        <Topbar />
        <Hero />
        <Divider text={"JOIN THE CVLT"} />
        <Services />
        <div className="mx-8 mt-8 mb-8 flex flex-col h-full">
          <div className="flex flex-col h-full md:flex-row md:items-center md:gap-8">
            <p className="text-white text-3xl font-CooperHewittBook uppercase tracking-widest md:w-2/3 lg:text-[50px] lg:leading-[55px]">
              Innovating and creating trends in the audiovisual industry, we
              make simple things unforgettable.
            </p>
            <button className="mt-4 text-white uppercase font-CooperHewittBook text-xl border border-yellow p-3 hover:bg-yellow hover:text-black md:p-4 md:mt-0 md:w-1/2 md:h-[90px] lg:h-[150px]">
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
