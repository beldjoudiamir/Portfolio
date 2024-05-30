import React from "react";

function service() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12">
                <p className="peer mb-6 text-gray-400">
                  AG Constructions vous propose une gamme complète de services
                  dans les domaines de la démolition, du curage et de la
                  maçonnerie. Notre équipe expérimentée et qualifiée est à votre
                  disposition pour répondre à vos besoins de manière efficace et
                  professionnelle. Nous sommes fiers de notre expertise et de
                  notre engagement à fournir des solutions sur mesure pour
                  chaque projet.
                </p>
                <p className="mb-6 text-gray-400">
                  De plus, nous mettons un accent particulier sur la
                  satisfaction de nos clients. Nous nous engageons à fournir des
                  services de haute qualité et à maintenir une communication
                  ouverte tout au long du processus. Chez AG Constructions,
                  votre satisfaction est notre priorité absolue.
                </p>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Nos Points Forts
                </h3>
                <ul
                  role="list"
                  className="marker:bg-sky-600 list-disc pl-5 space-y-3 text-slate-500"
                >
                  <li>
                    Expertise dans la démolition, le curage et la maçonnerie
                  </li>
                  <li>Équipe professionnelle et qualifiée</li>
                  <li>Approche personnalisée pour chaque projet</li>
                </ul>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-[#FEF5E7] before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-white overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#FEF5E7] w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-slate-500 transition-all ">
                <span className="block mb-10 font-bold group-hover:text-white">
                  Nos Services
                </span>
                <h2 className=" text-black font-bold text-3xl">
                  Construire avec Excellence, Détruire avec Précision.
                </h2>
              </div>
              <a
                className="font-bold text-sm flex mt-2 mb-8 items-center gap-2"
                href=""
              ></a>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="../../../public/pexels-mike-van-schoonderwalt-5511097.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default service;
