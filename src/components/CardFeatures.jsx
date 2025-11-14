import React from "react";

function CardFeatures({ icone: Icone, titulo, descricao }) {
  return (
    <div className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl md:w-[30%]">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-lg text-lighter bg-darker">
        {Icone && <Icone size={24} strokeWidth={1.5} />}
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900">{titulo}</h3>

      <p className="text-gray-600">{descricao}</p>
    </div>
  );
}

export default CardFeatures;
