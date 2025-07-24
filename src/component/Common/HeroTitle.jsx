export const HeroTitle = ({
  cta,
  title,
  textAlign = "items-center",
  alignstart = false,
  heading,
  description,
  primary = true,
  color = "text-white",
  ctaStyle = "justify-center m-auto",
}) => {
  return (
    <div className={`flex flex-col ${textAlign}`}>
      {cta ? (
        <div
          className={`flex items-center ${ctaStyle} text-sm font-normal h-8.5 rounded-full border ${
            primary ? "border-white" : "border-primaryBlack-100"
          }  ${color} p-3 mb-2`}
        >
          {cta}
        </div>
      ) : null}
      <div className={`${alignstart ? "" : "text-center"}`}>
        <h1
          className={`font-extrabold font-migra text-2xl md:text-7xl ${color} leading-tight`}
        >
          {heading}
          <br />
          {title}
        </h1>
        <p
          className={`${color} max-w-100 ${
            alignstart ? "" : "text-center m-auto"
          } font-normal text-[16px] mt-2`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
