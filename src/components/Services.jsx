import { ExternalLink } from "lucide-react";

export default function Services() {
  const ProjectElement = ({ title, type, pathImg, path }) => {
    return (
      <a href={path} className="w-full max-h-min">
        <div
          style={{ "--image-url": `url('/images/thumbnails/${pathImg}')` }}
          className={`bg-[image:var(--image-url)] bg-cover bg-center aspect-video`}
        ></div>
        <p className="text-white text-xl">{title}</p>
        <p className="text-white text-md">{type}</p>
      </a>
    );
  };

  return (
    <div className="mx-8">
      <h2 className="text-white text-3xl font-UrbanistSemibold text-right mb-2">
        What do we do?
      </h2>
      <div>
        <p className="text-white text-xl text-left font-UrbanistLight md:text-2xl">
          We help brands, companies and projects to be the best version of
          themselves and to give the best to the public.
        </p>
      </div>
      <div className="mt-12">
        <p className="text-yellow font-UrbanistSemibold text-2xl mb-2 uppercase md:text-3xl">
          Check out our work
        </p>
        <div className="md:flex md:flex-col md:gap-14">
          <div className="md:flex md:flex-row md:gap-14">
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
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <ProjectElement
              path={"/projects/thealiens/rock&roll"}
              pathImg={"rock&roll_theAliens.jpeg"}
              title={"Rock & Roll"}
              type={"Video Musical"}
            />
          </div>
          <p className="text-yellow font-UrbanistSemibold text-lg mb-2 uppercase w-full flex place-content-end md:text-xl lg:place-content-start lg:my-16">
            <a
              href="/projects"
              className="flex flex-row gap-3 justify-end w-min whitespace-nowrap lg:text-[21px]"
            >
              See all projects
              <ExternalLink />
            </a>
          </p>
          <div className="hidden lg:flex md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-stretch self-center">
              <p className="text-white text-[50px] font-CooperHewittBook text-right uppercase align-text-bottom tracking-widest h-full self-center">
                Avant-garde, original and efficient is the{" "}
                <span className="text-yellow">ghost cvlt films</span> way
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
