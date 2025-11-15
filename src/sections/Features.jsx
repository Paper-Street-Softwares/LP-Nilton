import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import CardFeatures from "../components/cards/CardFeatures";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionHeader from "../components/sectionElements/SectionHeader.jsx";
import content from "../content/Content";

export default function Features() {
  return (
    <>
      <div className="bg-gray-100">
        <SectionArea>
          <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <MotionDivDownToUp>
              <SectionHeader title={content.features.texts.titulo} />
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
