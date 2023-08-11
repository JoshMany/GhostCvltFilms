import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";

function Services() {
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
        <div className="pt-16 mx-8"></div>
        <Divider text={"JOIN THE CVLT"} />
        <Footer />
      </div>
    </>
  );
}

export default Services;
