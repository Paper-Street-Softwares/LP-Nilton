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
              <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-fontDarker lg:text-4xl">
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
                        className="inline-flex px-8 py-3 text-lg font-semibold text-center text-fontLighter transition-all rounded-lg shadow-md hover:scale-105 bg-darker gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                        </svg>
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
