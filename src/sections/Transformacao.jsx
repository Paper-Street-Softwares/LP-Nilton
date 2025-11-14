import MotionDivDownToUp from "../components/Animations/MotionDivDownToUp";
import CardTransformacao from "../components/CardTransformacao";
import content from "../content/Content";

export default function Transformacao() {
  return (
    <>
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <MotionDivDownToUp>
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                {content.transformacao.texts.titulo}
              </h2>
            </div>
          </MotionDivDownToUp>

          <MotionDivDownToUp>
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
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <div className="mt-16 text-center">
              <a
                href="https://wa.me/+5511990260977?text=Ol%C3%A1!%20Vim%20do%20Google%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar? ⚖️⚖️"
                className="inline-block px-8 py-3 text-lg font-semibold text-white transition-all rounded-lg shadow-md hover:scale-105 bg-darker"
              >
                {content.transformacao.texts.labelBotaoPrincial}
              </a>
            </div>
          </MotionDivDownToUp>
        </div>
      </div>
    </>
  );
}
