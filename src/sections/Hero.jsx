import content from "../content/Content";
import MotionDivDownToUp from "../components/Animations/MotionDivDownToUp";

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

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center text-white">
          <MotionDivDownToUp>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src="https://pachecoepeixotoadvogados.com.br/assets/logo-DX5AC2R1.png"
                alt="Imagem ilustrativa"
                className="max-w-[350px] mb-6"
              />
            </div>
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <span className="inline-flex mb-6 items-center rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-neutral-300 ring-1 ring-inset ring-neutral-400">
              {content.hero.texts.etiqueta}
            </span>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {content.hero.texts.titulo}
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
              {content.hero.texts.subtitulo}
            </p>
          </MotionDivDownToUp>

          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <MotionDivDownToUp>
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️"
                class="inline-flex items-center justify-center bg-lighter text-black font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg "
              >
                {content.hero.texts.labelBotaoPrincial}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 ml-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️"
                class="inline-flex items-center justify-center bg-darker text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                {content.hero.texts.labelBotaoSecundario}
              </a>
            </MotionDivDownToUp>
          </div>
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
            <MotionDivDownToUp>
              <svg
                class="h-8 w-8 text-white animate-bounce"
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
