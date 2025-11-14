import MotionDivDownToUp from "../components/animations/MotionDivDownToUp";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function Cta() {
  return (
    <>
      <div className="relative ">
        <div class="absolute inset-0 z-0">
          <img
            src="https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg"
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90"></div>
        </div>

        <SectionArea>
          <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase rounded-full text-fontLighter bg-darker">
                {content.cta.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2 className="max-w-3xl mx-auto mt-6 text-3xl font-bold text-fontLighter lg:text-4xl">
                {content.cta.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <div className="max-w-3xl p-8 mx-auto mt-10 shadow-lg rounded-2xl sm:p-12">
              <MotionDivDownToUp>
                <div className="inline-block mb-16 text-left">
                  <ul className="space-y-5">
                    {content.cta.pontos
                      .filter((ponto) => ponto.index !== 0)
                      .map((ponto) => (
                        <li key={ponto.index} className="flex items-center">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-lighter"
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

                          <span className="ml-3 text-lg text-fontLighter">
                            {ponto.texto}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </MotionDivDownToUp>

              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label={content.cta.texts.labelBotaoPrincial}
                colorMode="light"
              />
            </div>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
