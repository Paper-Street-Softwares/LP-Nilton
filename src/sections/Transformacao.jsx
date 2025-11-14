import MotionDivDownToUp from "../components/animations/MotionDivDownToUp";
import CtaButton from "../components/buttons/CtaButton";
import CardTransformacao from "../components/cards/CardTransformacao";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function Transformacao() {
  return (
    <>
      <div className="bg-white">
        <SectionArea>
          <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-fontDarker lg:text-4xl">
                  {content.transformacao.texts.titulo}
                </h2>
              </div>
            </MotionDivDownToUp>

            {(() => {
              const cardsConfig = [
                {
                  key: "antes",
                  data: content.transformacao.antes,
                  styles: {
                    cardClasses: "bg-neutral-50/90 shadow-lg hover:shadow-xl",
                    etiquetaClasses: "text-red-700 bg-red-100",
                    bulletClasses: "bg-red-500",
                    textoClasses: "text-lg text-gray-700",
                  },
                },
                {
                  key: "depois",
                  data: content.transformacao.depois,
                  styles: {
                    cardClasses: "bg-neutral-50/90 shadow-lg hover:shadow-xl",
                    etiquetaClasses: "text-green-700 bg-green-100",
                    bulletClasses: "bg-green-800",
                    textoClasses: "text-lg font-medium text-gray-900",
                  },
                },
              ];

              return (
                <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
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

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.transformacao.texts.labelBotaoPrincial}
              colorMode="dark"
            />
          </div>
        </SectionArea>
      </div>
    </>
  );
}
