import { Button, Image } from "@nextui-org/react";
import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between items-center   ">
      <div className="flex flex-col gap-12 mb-28 lg:mb-0">
        <div>
          <h2>Bonjour !</h2>

          <p className="text-2xl font-semibold  pb-4">
            Je m'appelle Sandrine Alcazar
            <br /> et je vous souhaite la bienvenue sur mon portfolio
          </p>
          <p className="text-2xl font-semibold ">
            Je suis Développeuse Front-End passionée et motivée.
          </p>
        </div>
        <Button variant="bordered" className="py-6 btn" radius="sm">
          <MdOutlineDownloadForOffline className="text-xl" />
          <span className="text-lg">Télécharger le CV</span>
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end ">
        <Image
          alt=""
          src="/images/dev_web_img.png "
          className="rounded-full shadow-md"
          width={280}
        />
      </div>
    </section>
  );
};

export default Banner;
