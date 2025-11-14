import MotionDivDownToUp from "../components/Animations/MotionDivDownToUp";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function About() {
  return (
    <>
      <div className="bg-gray-50">
        <SectionArea>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900 lg:text-4xl">
                {content.about.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <div className="flex flex-col max-w-6xl gap-8 p-8 mx-auto bg-white border border-gray-100 shadow-2xl md:gap-16 rounded-2xl sm:p-12 lg:flex-row">
                <MotionDivDownToUp>
                  <div className="flex md:justify-center md:items-center">
                    <img
                      src="https://pachecoepeixotoadvogados.com.br/assets/aboutImg-DwgPvXtM.webp"
                      alt="Imagem ilustrativa"
                      className="w-full max-w-[800px] rounded-lg lg:max-w-[500px]"
                    />
                  </div>
                </MotionDivDownToUp>

                <div className="flex flex-col items-center lg:justify-center lg:items-start">
                  <MotionDivDownToUp>
                    <div className="inline-block text-left">
                      <ul className="space-y-5">
                        {content.about.pontos
                          .filter((ponto) => ponto.index !== 0)
                          .map((ponto) => (
                            <li key={ponto.index} className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg
                                  className="w-6 h-6 text-darker"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>

                              <span className="ml-3 text-lg text-gray-700">
                                {ponto.texto}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </MotionDivDownToUp>

                  <MotionDivDownToUp>
                    <div className="mt-12 ">
                      <a
                        href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
                        className="inline-block px-8 py-3 text-lg font-semibold text-center text-white transition-all rounded-lg shadow-md hover:scale-105 bg-darker"
                      >
                        {content.about.texts.labelBotaoPrincial}
                      </a>
                    </div>
                  </MotionDivDownToUp>
                </div>
              </div>
            </MotionDivDownToUp>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
