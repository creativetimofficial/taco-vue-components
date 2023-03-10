import { shadow } from "@/utils/shadow.js";
import { border } from "@/utils/border.js";
import { text } from "@/utils/text.js";
import { states } from "@/utils/states.js";
import { variantStyle } from "@/utils/colors.js";

export function getContainerClass(position) {
  const structureClass = {
    base: "whitespace-nowrap",
  };

  return `${structureClass.base} ${position}`;
}

export function getStyling(color, variant, size) {
  const excludedColors = ["amber", "lime", "yellow", "white"];

  const textColor = excludedColors.includes(color)
    ? "text-black"
    : "text-white";

  let structureClass = {
    base: "rounded-lg font-sans text-xs font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    variants: {
      filled:
        variant === "filled"
          ? `active:opacity-[0.85] shadow-md hover:shadow-lg ${textColor} ${variantStyle[variant][color]} ${shadow.opacity[20][color]} ${states.hover.shadow.opacity[40][color]} focus:opacity-[0.85] focus:shadow-none active:shadow-none`
          : "",
      gradient:
        variant === "gradient"
          ? `active:opacity-[0.85] shadow-md hover:shadow-lg ${textColor} ${variantStyle[variant][color]} ${shadow.opacity[20][color]} ${states.hover.shadow.opacity[40][color]}`
          : "",
      outlined: `active:opacity-[0.85] border ${border[color]} ${text[color]} hover:opacity-75 focus:ring ${states.focus.ring[color]}`,
      text: `${text[color]} ${states.hover.colors.opacity[10][color]} ${states.active.colors.opacity[30][color]}`,
    },
    sizes: {
      sm: "py-2 px-4",
      md: "py-3 px-6",
      lg: "py-3.5 px-7",
    },
  };

  return `${structureClass.base} ${structureClass.sizes[size]} ${structureClass.variants[variant]}`;
}

export function getListClass(zIndex, size, where) {
  const base = `min-w-full absolute bg-white border border-blue-gray-50 rounded-md shadow text-blue-gray-500 font-sans text-sm font-normal max-h-96 focus:outline-none p-3 z-[${zIndex}]`;
  const structureClass = {
    size: {
      lg: {
        top: "mt-1",
        left: "left-full ml-4 -top-3",
      },
      md: {
        top: "mt-1",
        left: "left-full ml-4 -top-3",
      },
      sm: {
        top: "mt-1",
        left: "left-full ml-4 -top-3",
      },
    },
  };
  return `${base} ${structureClass.size[size][where]}`;
}

export function getOptionClass() {
  const structureClass = {
    base: "hover:bg-blue-gray-50 focus:bg-blue-gray-50 rounded-md hover:text-blue-gray-900 focus:text-blue-gray-900 cursor-pointer leading-tight hover:bg-opacity-80 focus:bg-opacity-80 outline outline-0 pb-2 pt-[9px] px-3 transition-all select-none",
  };

  return structureClass.base;
}
