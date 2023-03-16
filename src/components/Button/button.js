import { shadow } from "../../utils/shadow.js";
import { border } from "../../utils/border.js";
import { text } from "../../utils/text.js";
import { states } from "../../utils/states.js";
import { variantStyle } from "../../utils/colors.js";

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
