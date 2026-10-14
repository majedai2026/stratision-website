import React from "react";

export interface StratisionLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showDescriptor?: boolean;
  showTagline?: boolean;
  align?: "left" | "center";
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
}

export const StratisionLogo: React.FC<StratisionLogoProps> = ({
  size = "md",
  showDescriptor = false,
  showTagline,
  align = "left",
  className = "",
  imgClassName = "",
  onClick,
}) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-[20px] sm:h-[22px]";
      case "lg":
        return "h-8 sm:h-9";
      case "xl":
        return "h-10 sm:h-12";
      case "md":
      default:
        return "h-[23px] sm:h-[25px]";
    }
  };

  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const shouldShowSubtitle =
    showTagline !== undefined ? showTagline : showDescriptor;

  return (
    <div
      id="stratision-brand-lockup"
      role="img"
      aria-label="Stratision"
      onClick={onClick}
      className={`inline-flex select-none ${
        shouldShowSubtitle ? `flex-col ${alignClass}` : "items-center"
      } ${onClick ? "cursor-pointer group" : ""} ${className}`}
    >
      <img
        src="/stratision-white-300w-1.png"
        alt="Stratision"
        className={`${getSizeClass()} ${imgClassName} w-auto object-contain transition-opacity duration-200 group-hover:opacity-90`}
        draggable={false}
      />
      {shouldShowSubtitle && (
        <span className="text-[8.5px] sm:text-[9px] font-mono tracking-[0.28em] text-[#8FA3B8] uppercase mt-1 leading-none">
          STRATEGY &nbsp;·&nbsp; VISION &nbsp;·&nbsp; INTELLIGENCE
        </span>
      )}
    </div>
  );
};
