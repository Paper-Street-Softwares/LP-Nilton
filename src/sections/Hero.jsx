import content from "../content/Content";
import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";

export default function Hero({ imagemFocadaBackground }) {
  return (
    <>
      <div class="relative bg-black overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img
            src={content.hero.imagens.backgroundHero}
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90 lg:bg-black/85"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 lg:pt-36 lg:pb-28 text-center text-fontLighter">
          <MotionDivDownToUp>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src={content.hero.imagens.logo}
                alt="Imagem ilustrativa"
                className="w-full max-w-[350px] mb-6"
              />
            </div>
          </MotionDivDownToUp>
          {imagemFocadaBackground && (
            <MotionDivDownToUp className="flex justify-center w-full mb-8 lg:hidden">
              <div
                style={{
                  backgroundImage: `url(${content.hero.imagens.focadaHero})`,
                }}
                className="bg-center bg-no-repeat bg-cover h-[320px] w-[450px] md:h-[600px] md:w-[600px] rounded-xl"
              />
            </MotionDivDownToUp>
          )}
          <MotionDivDownToUp>
            <span className="inline-flex mb-6 items-center capitalize rounded-full font-secondFont bg-black/60 px-4 py-1.5 text-sm font-medium text-fontLighter/80 ring-1 ring-inset ring-neutral-400">
              {content.hero.texts.etiqueta}
            </span>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-medium font-mainFont capitalize">
              {content.hero.texts.titulo}
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-fontLighter/85 font-secondFont">
              {content.hero.texts.subtitulo}
            </p>
          </MotionDivDownToUp>

          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoPrincial}
              colorMode="light"
            />
            <CtaButton
              icon={content.util.svgCalendario}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoSecundario}
              colorMode="dark"
            />
          </div>
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
            <MotionDivDownToUp>
              <svg
                class="h-8 w-8 text-fontLighter animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </MotionDivDownToUp>
          </div>
        </div>
      </div>
    </>
  );
}
