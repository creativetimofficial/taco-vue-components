import { variantStyle } from "../../utils/colors.js";

export function getPaginationClass(size, color) {
  const sizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  return {
    color: variantStyle.filled[color],
    size: sizes[size],
  };
}

export const prevNextElement =
  "flex items-center justify-center text-gray-600 border border-solid border-gray-300 rounded-full bg-white";

export const itemPagination =
  "flex items-center justify-center text-gray-600 rounded-full";
