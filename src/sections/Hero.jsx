import content from "../content/Content";
import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import imgMobile from "../assets/backgroundMobile.webp";
import logoMobile from "../assets/logoMobile.webp";
import heroMobile from "../assets/heroMobile.webp";

export default function Hero({ imagemFocadaBackground }) {
  return (
    <>
      <div className="relative overflow-hidden bg-black h-auto">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width:430px)" srcset="/backgroundMobile.webp" />
            <img
              src={content.hero.imagens.backgroundHero}
              alt="Imagem ilustrativa"
              className="object-cover w-full h-full"
              width={1600}
              height={1300}
            />
          </picture>

          <div className="absolute inset-0 bg-black/90 lg:bg-black/85"></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 md:pt-28 ${
            imagemFocadaBackground && "lg:pt-10"
          } lg:pb-28 text-center text-fontLighter`}
        >
          <div>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <picture>
                <source media="(max-width:375px)" srcSet={logoMobile} />
                <img
                  src={content.hero.imagens.logo}
                  alt="Logomarca"
                  className="w-full aspect-auto mb-6 "
                  width={360}
                  height={200}
                />
              </picture>
            </div>
          </div>
          {imagemFocadaBackground && (
            <div className="flex justify-center w-full mb-8">
              <picture>
                <source media="(max-width:375px)" srcSet={heroMobile} />
                <img
                  src="/hero.webp"
                  fetchpriority="high"
                  decoding="sync"
                  width={450}
                  height={500}
                  alt="imagem da Pessoa"
                  className="w-full max-w-[450px] aspect-[9/10] object-cover"
                />
              </picture>
            </div>
          )}
          <div>
            <span className="inline-flex mb-6 items-center capitalize rounded-full font-secondFont bg-black/60 px-4 py-1.5 text-sm font-medium text-fontLighter/80 ring-1 ring-inset ring-neutral-400">
              {content.hero.texts.etiqueta}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-medium tracking-tight capitalize sm:text-5xl lg:text-6xl font-mainFont">
              {content.hero.texts.titulo}
            </h1>
          </div>
          <div>
            <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fontLighter/85 font-secondFont">
              {content.hero.texts.subtitulo}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
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
          <div className="absolute -translate-x-1/2 bottom-6 left-1/2">
            <MotionDivDownToUp>
              <svg
                className="w-8 h-8 text-fontLighter animate-bounce"
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
