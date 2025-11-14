import content from "../content/Content";
import MotionDivDownToUp from "../components/Animations/MotionDivDownToUp";
import SectionArea from "../components/sectionElements/SectionArea";

export default function Hero() {
  return (
    <>
      <div class="relative bg-black overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img
            src="https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg"
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/85"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center text-fontLighter">
          <MotionDivDownToUp>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src="https://pachecoepeixotoadvogados.com.br/assets/logo-DX5AC2R1.png"
                alt="Imagem ilustrativa"
                className="w-full max-w-[350px] mb-6"
              />
            </div>
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <span className="inline-flex mb-6 items-center rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-fontLighter/80 ring-1 ring-inset ring-neutral-400">
              {content.hero.texts.etiqueta}
            </span>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {content.hero.texts.titulo}
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-fontLighter/90">
              {content.hero.texts.subtitulo}
            </p>
          </MotionDivDownToUp>

          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <MotionDivDownToUp>
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️"
                class="inline-flex items-center justify-center bg-lighter text-fontDarker font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg gap-2"
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
                {content.hero.texts.labelBotaoPrincial}
              </a>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️"
                class="inline-flex items-center justify-center bg-darker text-fontLighter font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                {content.hero.texts.labelBotaoSecundario}
              </a>
            </MotionDivDownToUp>
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
