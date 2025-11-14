import CardFeatures from "../components/CardFeatures";
import content from "../content/Content";

export default function Features() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-center text-gray-900 lg:text-4xl">
            {content.features.texts.titulo}
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
    </>
  );
}
