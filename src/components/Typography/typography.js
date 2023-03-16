import { text } from "../../utils/text.js";
import { variantStyle } from "../../utils/colors.js";

export function getClass(variant, color, textGradient) {
  const structureClass = {
    base: "block font-sans antialiased",
    variants: {
      h1: "text-5xl font-semibold leading-tight tracking-normal",
      h2: "text-4xl font-semibold leading-[1.3] tracking-normal",
      h3: "text-3xl font-semibold leading-snug tracking-normal",
      h4: "text-2xl font-semibold leading-snug tracking-normal",
      h5: "text-xl font-semibold leading-snug tracking-normal",
      h6: "text-base font-semibold leading-relaxed capitalize tracking-normal",
      lead: "text-xl font-normal leading-relaxed",
      paragraph: "text-base font-light leading-relaxed",
      small: "text-sm font-light leading-normal",
    },
    colors: `${textGradient ? variantStyle.gradient[color] : text[color]}`,
    textGradient: textGradient ? "text-transparent bg-clip-text" : "",
  };

  return `${structureClass.base} ${structureClass.variants[variant]} ${structureClass.colors} ${structureClass.textGradient}`;
}
