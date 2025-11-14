import content from "../content/Content";

export default function Footer() {
  return (
    <>
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
