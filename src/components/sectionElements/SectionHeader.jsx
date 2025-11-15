import MotionDivDownToUp from "../animations/MotionDownToUp";

export default function SectionHeader({ colorMode, title }) {
  const themes = {
    light: "text-fontLighter",
    dark: "text-fontDarker",
  };

  const colors = themes[colorMode] || themes.darkr;

  return (
    <>
      <MotionDivDownToUp>
        <h2
          className={`${colors} font-mainFont mb-16 text-3xl font-bold tracking-tight text-center lg:text-4xl capitalize`}
        >
          {title}
        </h2>
      </MotionDivDownToUp>
    </>
  );
}
