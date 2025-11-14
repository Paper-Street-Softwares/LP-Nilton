import CardBeneficios from "../components/CardBeneficio";
import CardFeatures from "../components/CardFeatures";
import CardTransformacao from "../components/CardTransformacao";
import content from "../content/Content";

export default function Index() {
  return (
    <>
      {/* Hero */}
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
          <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
            <img
              src="https://pachecoepeixotoadvogados.com.br/assets/logo-DX5AC2R1.png"
              alt="Imagem ilustrativa"
              className="max-w-[350px] mb-6"
            />
          </div>
          <span className="inline-flex mb-6 items-center rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-neutral-300 ring-1 ring-inset ring-neutral-400">
            {content.hero.texts.etiqueta}
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {content.hero.texts.titulo}
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            {content.hero.texts.subtitulo}
          </p>

          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
            <a
              href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️"
              class="inline-flex items-center justify-center bg-darker text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              {content.hero.texts.labelBotaoSecundario}
            </a>
          </div>
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
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
          </div>
        </div>
      </div>

      {/* Áreas de atuação | Serviços | Features diversos */}
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-center text-gray-900 lg:text-4xl">
            Diferenciais da Paper Street
          </h2>

          <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
            {content.features.cards
              .filter((card) => card.index !== 0)
              .map((card) => (
                <CardFeatures key={card.index} {...card} />
              ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
              className="inline-block px-8 py-3 text-lg font-semibold text-black transition-all rounded-lg shadow-md hover:scale-105 bg-lighter"
            >
              {content.features.texts.labelBotaoPrincial}
            </a>
          </div>
        </div>
      </div>

      {/* Transformação */}
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              {content.transformacao.texts.titulo}
            </h2>
          </div>

          {(() => {
            const cardsConfig = [
              {
                key: "antes",
                data: content.transformacao.antes,
                styles: {
                  cardClasses:
                    "bg-neutral-50/90 shadow-lg hover:shadow-xl transition-all duration-300",
                  etiquetaClasses: "text-red-700 bg-red-100",
                  bulletClasses: "bg-red-500",
                  textoClasses: "text-lg text-gray-700",
                },
              },
              {
                key: "depois",
                data: content.transformacao.depois,
                styles: {
                  cardClasses:
                    "bg-neutral-50/90 shadow-lg hover:shadow-xl transition-all duration-300",
                  etiquetaClasses: "text-green-700 bg-green-100",
                  bulletClasses: "bg-green-800",
                  textoClasses: "text-lg font-medium text-gray-900",
                },
              },
            ];

            return (
              <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
                {cardsConfig.map((config) => (
                  <CardTransformacao
                    key={config.key}
                    data={config.data}
                    styles={config.styles}
                  />
                ))}
              </div>
            );
          })()}

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
              className="inline-block px-8 py-3 text-lg font-semibold text-white transition-all rounded-lg shadow-md hover:scale-105 bg-darker"
            >
              {content.transformacao.texts.labelBotaoPrincial}
            </a>
          </div>
        </div>
      </div>

      {/* CTA com oferta */}
      <div className="relative ">
        <div class="absolute inset-0 z-0">
          <img
            src="https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg"
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="relative z-10 px-4 py-16 mx-auto text-center max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-darker">
            {content.cta.texts.etiqueta}
          </span>

          <h2 className="max-w-3xl mx-auto mt-6 text-3xl font-bold text-white lg:text-4xl">
            {content.cta.texts.titulo}
          </h2>

          <div className="max-w-3xl p-8 mx-auto mt-10 shadow-lg rounded-2xl sm:p-12">
            <div className="inline-block text-left">
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

                      <span className="ml-3 text-lg text-white">
                        {ponto.texto}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
                className="inline-block px-8 py-3 text-lg font-semibold text-black transition-all rounded-lg shadow-md hover:scale-105 bg-lighter "
              >
                {content.cta.texts.labelBotaoPrincial}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-50">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900 lg:text-4xl">
            {content.about.texts.titulo}
          </h2>

          <div className="flex flex-col max-w-6xl gap-8 p-8 mx-auto bg-white border border-gray-100 shadow-2xl md:gap-16 rounded-2xl sm:p-12 lg:flex-row">
            <div className="flex md:justify-center md:items-center">
              <img
                src="https://pachecoepeixotoadvogados.com.br/assets/aboutImg-DwgPvXtM.webp"
                alt="Imagem ilustrativa"
                className="w-full max-w-[800px] rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center lg:justify-center lg:items-start">
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

              <div className="mt-12 ">
                <a
                  href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
                  className="inline-block px-8 py-3 text-lg font-semibold text-center text-white transition-all rounded-lg shadow-md hover:scale-105 bg-darker"
                >
                  {content.about.texts.labelBotaoPrincial}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer com CTA */}
      <div className="relative">
        <div class="absolute inset-0 z-0">
          <img
            src="https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg"
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="relative z-10 px-4 py-16 mx-auto text-center max-w-7xl sm:py-24 sm:px-6 lg:px-8">
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

          <h2 className="max-w-3xl mx-auto mt-6 text-3xl font-bold text-white lg:text-4xl">
            {content.footer.texts.titulo}
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-200">
            {content.footer.texts.subtitulo}
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold transition-all rounded-lg shadow-md hover:scale-105 bg-lighter text-slate-900 "
            >
              {content.footer.texts.labelBotaoPrincial}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-xs mx-auto mt-16 border-t border-white/10"></div>

          <p className="mt-6 text-sm text-gray-400">
            {content.footer.pontos.ponto1} • {content.footer.pontos.ponto2} •{" "}
            {content.footer.pontos.ponto3}
          </p>
          <p className="mt-12 text-sm text-gray-400">
            {content.footer.texts.direitosReservados} -{" "}
            {content.footer.texts.desenvolvidoPor}
          </p>
        </div>
      </div>
    </>
  );
}
