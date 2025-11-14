import MotionDivDownToUp from "../components/animations/MotionDivDownToUp";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div class="absolute inset-0 z-0">
          <img
            src={content.footer.imagem.baclground}
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90"></div>
        </div>
        <SectionArea>
          <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <span className="inline-flex items-center rounded-full bg-darker text-lighter font-semibold text-xs px-4 py-1.5 uppercase tracking-wider ring-1 ring-inset ring-white/10">
                <svg
                  className="w-4 h-4 mr-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {content.footer.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2 className="max-w-3xl mx-auto mt-6 text-3xl font-bold text-fontLighter lg:text-4xl">
                {content.footer.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <p className="max-w-2xl mx-auto mt-4 mb-16 text-lg text-fontLighter">
                {content.footer.texts.subtitulo}
              </p>
            </MotionDivDownToUp>

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.footer.texts.labelBotaoPrincial}
              colorMode="light"
            />

            <MotionDivDownToUp>
              <div className="max-w-xs mx-auto mt-16 border-t border-white/10"></div>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <p className="mt-6 text-sm text-fontLighter/50">
                {content.footer.pontos.ponto1} • {content.footer.pontos.ponto2}{" "}
                • {content.footer.pontos.ponto3}
              </p>
            </MotionDivDownToUp>

            <p className="mt-12 text-sm text-fontLighter/50">
              {content.footer.texts.direitosReservados} - Desenvolvido com
              excelência por{" "}
              <a
                target="_blank"
                href="https://paperstreet.com.br"
                className="underline"
              >
                Paper Street
              </a>
            </p>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
