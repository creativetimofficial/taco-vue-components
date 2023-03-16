import { variantStyle } from "../../utils/colors.js";

export function getContainerClass(withLabel) {
  return `${
    withLabel ? "h-4 " : "h-1.5 "
  }bg-blue-gray-50 rounded-sm flex font-sans text-xs font-medium flex-start overflow-hidden w-full`;
}

export function getBarClass(variant, color) {
  const excludedColors = ["amber", "lime", "yellow"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

  const structureClass = {
    base: "items-baseline flex h-full justify-center overflow-hidden break-all",
    variant: `${variantStyle[variant][color]} ${textColor}`,
  };

  return `${structureClass.base} ${structureClass.variant}`;
}
