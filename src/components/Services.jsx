import { Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const ProjectElement = ({ title, type, pathImg, path }) => {
    return (
      <div>
        <a href={path} className="w-full max-h-min">
          <div
            style={{ "--image-url": `url('/images/thumbnails/${pathImg}')` }}
            className={`bg-[image:var(--image-url)] bg-cover bg-center aspect-video`}
          ></div>
        </a>
        <p className="text-white text-xl font-UrbanistSemibold uppercase mt-2 sm:text-[26px]">
          {title}
        </p>
        <p className="text-white text-md font-UrbanistRegular uppercase sm:text-[20px]">
          {type}
        </p>
      </div>
    );
  };

  return (
    <div className="mx-8 mt-6">
      <h2 className="text-white text-3xl font-UrbanistRegular text-right mb-2 uppercase sm:text-[35px] lg:text-[40px] lg:text-left lg:py-4">
        What do we do?
      </h2>
      <div>
        <p className="mt-4 text-white text-xl text-left font-UrbanistLight uppercase sm:text-[25px] lg:w-1/2 lg:text-[35px] lg:leading-9">
          We help brands, companies and projects to be the best version of
          themselves and to give the best to the public.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-yellow font-UrbanistSemibold text-2xl mb-2 uppercase sm:text-[30px] lg:pt-2 lg:text-[35px]">
          Check out our work
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectElement
            path={"/projects/thealiens/soledad"}
            pathImg={"soledad_theAliens.jpg"}
            title={"Soledad"}
            type={"Video musical"}
          />
          <ProjectElement
            path={"/projects/thealiens/chicanormal"}
            pathImg={"chicaNormal.jpg"}
            title={"Chica Normal"}
            type={"Video musical"}
          />
          <ProjectElement
            path={"/projects/thealiens/rock&roll"}
            pathImg={"rock&roll_theAliens.jpeg"}
            title={"Rock & Roll"}
            type={"Video Musical"}
          />
        </div>
        <p className="text-yellow font-UrbanistSemibold mt-4 uppercase w-full flex place-content-end">
          <Link
            to="/projects"
            className="flex flex-row gap-3 justify-end w-min whitespace-nowrap text-lg sm:text-[21px] lg:text-[28px]"
          >
            See all projects
            <Clapperboard />
          </Link>
        </p>
        <div className="hidden lg:flex lg:mt-12 xl:w-1/2 xl:justify-end xl:mr-0 xl:ml-auto">
          <p className="text-white text-[50px] font-CooperHewittBook text-right uppercase tracking-widest h-full">
            Avant-garde, original and efficient is the{" "}
            <span className="text-yellow">ghost cvlt films</span> way
          </p>
        </div>
      </div>
    </div>
  );
}
