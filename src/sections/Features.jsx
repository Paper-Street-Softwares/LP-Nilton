import MotionDivDownToUp from "../components/animations/MotionDivDownToUp";
import CtaButton from "../components/buttons/CtaButton";
import CardFeatures from "../components/cards/CardFeatures";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function Features() {
  return (
    <>
      <div className="bg-gray-100">
        <SectionArea>
          <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <h2 className="mb-16 text-3xl font-bold tracking-tight text-center text-fontDarker lg:text-4xl">
                {content.features.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <div className="flex flex-col gap-10 mb-16 md:flex-row md:flex-wrap md:justify-center">
              {content.features.cards
                .filter((card) => card.index !== 0)
                .map((card) => (
                  <CardFeatures key={card.index} {...card} />
                ))}
            </div>

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.features.texts.labelBotaoPrincial}
              colorMode="dark"
            />
          </div>
        </SectionArea>
      </div>
    </>
  );
}
