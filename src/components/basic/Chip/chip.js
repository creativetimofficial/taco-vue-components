import { variantStyle } from "@/utils/colors.js";
import { states } from "@/utils/states.js";

export function getClass(variant, color) {
  const excludedColors = ["amber", "lime", "yellow"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

  const structureClass = {
    base: `relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none ${textColor}`,
    variants: {
      filled: `${variantStyle[variant][color]}`,
      gradient: `${variantStyle[variant][color]}`,
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant]}`;
}

export function getButtonClassChip(color) {
  return `${variantStyle.others[800][color]} ${states.hover.colors[900][color]}`;
}

export const iconClass =
  "flex justify-center content-center items-center w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4";

export const dismissibleClass =
  "absolute top-1 right-1 mt-[0.5px] mx-px w-max rounded-md transition-colors";
