import React from "react";
import MotionDivDownToUp from "../animations/MotionDownToUp.jsx";

function CardFeatures({ icone: Icone, titulo, descricao }) {
  return (
    <MotionDivDownToUp className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl md:w-[30%] flex flex-col justify-center items-center">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-transparent border-2 border-solid rounded-lg text-darker/50 border-lighter">
        {Icone && <Icone size={24} strokeWidth={1.5} />}
      </div>

      <h3 className="mb-2 text-xl font-extrabold text-center text-gray-900 capitalize font-mainFont">
        {titulo}
      </h3>

      <p className="text-center text-fontDarker/70 font-secondFont">
        {descricao}
      </p>
    </MotionDivDownToUp>
  );
}

export default CardFeatures;
