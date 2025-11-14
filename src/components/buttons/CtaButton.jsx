import MotionDivDownToUp from "../animations/MotionDivDownToUp";

export default function CtaButton({ link, icon, label, colorMode }) {
  const themes = {
    light: "bg-lighter text-fontDarker ",
    dark: "bg-darker text-fontLighter",
  };

  const colors = themes[colorMode] || themes.light;

  return (
    <>
      <MotionDivDownToUp>
        <a
          target="_blank"
          href={link}
          className={`inline-flex items-center justify-center ${colors} font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 shadow-lg gap-3`}
        >
          {icon}
          {label}
        </a>
      </MotionDivDownToUp>
    </>
  );
}
