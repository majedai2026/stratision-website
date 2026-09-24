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
  align = "center",
  className = "",
  imgClassName = "",
  onClick,
}) => {
  // Optically calibrated sizing matching the site's typography and navigation proportions
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-[18px] sm:h-[20px]";
      case "lg":
        return "h-8 sm:h-9";
      case "xl":
        return "h-10 sm:h-12";
      case "md":
      default:
        return "h-[22px] sm:h-[26px]";
    }
  };

  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      id="stratision-brand-lockup"
      role="img"
      aria-label="Stratision — Strategy • Vision • Intelligence"
      onClick={onClick}
      className={`inline-flex items-center select-none ${alignClass} ${
        onClick ? "cursor-pointer group" : ""
      } ${className}`}
    >
      <img
        src="/stratision-white-300w-1.png"
        alt="Stratision — Strategy • Vision • Intelligence"
        className={`${getSizeClass()} ${imgClassName} w-auto object-contain transition-opacity duration-200 group-hover:opacity-90`}
        draggable={false}
      />
    </div>
  );
};
