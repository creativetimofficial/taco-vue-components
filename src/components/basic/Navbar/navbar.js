import { variantStyle } from "@/utils/colors.js";

export function getNavbarClass(variant, color, blurred, fullWidth, shadow) {
  const excludedColors = ["amber", "lime", "yellow", "white", "transparent"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

  const structureClass = {
    base: "rounded-xl block max-w-screen-2xl px-8 py-4 w-full",
    shadow: "shadow-md",
    fullWidth: "max-w-full px-4 rounded-none w-full",
    blurred:
      "backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 border",
    variant: `${variantStyle[variant][color]} ${textColor}`,
  };

  return `${structureClass.base} ${structureClass.variant} ${
    blurred ? structureClass.blurred : ""
  } ${fullWidth ? structureClass.fullWidth : ""} ${
    shadow ? structureClass.shadow : ""
  }`;
}

export function getItemClass(color){
  const excludedColors = ["amber", "lime", "yellow", "white", "transparent"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

    const structureClass = {
      base: "block antialiased font-sans text-sm leading-normal ${textColor} p-1 font-normal",
      color: `${textColor}`,
    };

  return `${structureClass.base} ${structureClass.color}`
}

export function getIconClass(color){
  const excludedColors = ["amber", "lime", "yellow", "white", "transparent"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

    const structureClass = {
      base: "h-6 w-6",
      color: `${textColor}`,
    };

  return `${structureClass.base} ${structureClass.color}`
}

export const containerClass =
  "container mx-auto lg:flex items-center lg:justify-between text-blue-gray-900 grid grid-cols-2 grid-rows-template-auto";

export const listClass =
  "lg:items-center lg:gap-6 lg:flex lg:flex-row flex-col row-start-2 lg:my-0 my-3.5 gap-2";

export const buttonToggleClass =
  "relative col-[10px] middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-10 rounded-lg text-xs ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden";

export const navbarButton =
  "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2";

export const spanClass = "lg:inline-block row-start-3 col-span-2";

export const linksClass = "flex items-center";
