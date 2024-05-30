import React from "react";

function Home() {
  return (
    <>
      {/** Hello Slider **/}
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="../../../public/media-appartements--2024.jpg"
          className="absolute top-0 left-0 min-h-full ob"
          alt="image"
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12  h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">
              Nous sommes des experts
            </span>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Ag Construction propose des services de consultation financière de
              différentes manières.
            </h1>
            <p className="text-stone-100 text-base">
              Spécialisé en démolition, curage et maçonnerie, AG Construction
              compte sur une équipe de professionnels pour satisfaire vos
              besoins avec précision. Reconnue pour son expertise et son
              savoir-faire, AG Construction réalise des projets à travers la
              France avec disponibilité 24h/24 et 7j/7.
            </p>
            <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
              ÉTABLIR UN DEVIS
            </button>
          </div>
        </div>
      </div>

      {/** Suite ... */}
      <div className="bg-[#FEF5E7] py-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">
              UN PROFESSIONNEL POUR GARANTIR LA RÉUSSITE DE VOTRE PROJETS
            </h2>
            <p className="text-base text-sky-950">
              Spécialiste en démolition, curage et maçonnerie, AG Construction
              rassemble une équipe de professionnels pour répondre à toutes vos
              exigences. Reconnue pour son expertise et son savoir-faire, AG
              Construction réalise des opérations pour des clients dans toute la
              France avec une disponibilité 24h/24 et 7j/7.
            </p>
          </div>
          <button className="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">
            Réalisations
          </button>
        </div>
      </div>

      {/** Suite ... */}

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-sky-950 font-bold text-2xl max-w-xs text-right mb-12 mt-10">
              AG Constructions, Bâtir l'avenir ensemble.
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="../../../public/tool-2222458_1280.jpg"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                Nos <br />
                Services
              </h2>
              <p className="text-white text-sm">
                AG Constructions vous propose une gamme complète de services
                dans les domaines de la démolition, du curage et de la
                maçonnerie. Notre équipe expérimentée et qualifiée est à votre
                disposition pour répondre à vos besoins de manière efficace et
                professionnelle. Nous sommes fiers de notre expertise et de
                notre engagement à fournir des solutions sur mesure pour chaque
                projet.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">
                Pour plus d'informations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** Suite ... */}

      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#FEF5E7] before:top-0 before:right-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">
                Nos <br />
                Réalisations
              </h2>
              <p className="text-sky-950 text-sm">
                Chez AG Constructions, nous sommes fiers de partager nos
                réalisations avec vous. Grâce à notre expertise en démolition,
                curage et maçonnerie, nous avons réalisé de nombreux projets
                réussis à travers toute la France. De la démolition de
                structures complexes à la rénovation de bâtiments historiques,
                notre équipe compétente a su relever les défis les plus
                exigeants avec excellence. Chaque projet est traité avec soin et
                professionnalisme, garantissant des résultats de qualité
                supérieure à nos clients. Découvrez quelques-unes de nos
                réalisations remarquables ci-dessous.
              </p>
              <button className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">
                Pour plus d'informations
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">
              Construire avec Excellence, Détruire avec Précision.
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="../../../public/cutting-granite-stones-8028375_1280.jpg"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/** Suite ... */}

      <div className="relative pt-16 bg-blueGray-50 bg-sky-950 mb-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="../../../public/pexels-burst-544966.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <span className="material-symbols-outlined">
                          foundation
                        </span>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-[#f7d0b6]">
                        Gros Oeuvre
                      </h6>
                      <p className="mb-4 text-white">
                        Démolition Curage, Maçonnerie Générale, construction,
                        rénovation, charpente /couverture, zinguerie ,
                        menuiserie extérieur
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <span className="material-symbols-outlined">
                          imagesearch_roller
                        </span>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-[#f7d0b6]">
                        Second Oeuvre
                      </h6>
                      <p className="mb-4 text-white">
                        Cloison, plâtrerie , Peinture , revêtements sol et mur ,
                        menuiserie intérieur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <span className="material-symbols-outlined">
                          shower
                        </span>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-[#f7d0b6]">
                        Plomberie
                      </h6>
                      <p className="mb-4 text-white">
                        Distribution Evacuation, Equipement sanitaire ( PMR ),
                        VMC, Installation types chauffe eau , chauffage ,
                        entretient général
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <span className="material-symbols-outlined">bolt</span>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-[#f7d0b6]">
                        Électricité
                      </h6>
                      <p className="mb-4 text-white">
                        Installation, Distribution, Branchement raccordement,
                        appareillages chauffage électriques , climatisation et
                        Diagnostique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
