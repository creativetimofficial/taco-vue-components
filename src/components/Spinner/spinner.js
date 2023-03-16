import { fill } from "../../utils/fill.js";

export function getSpinnerClass(size, color, variant) {
  const structureClass = {
    base: "inline mr-2 text-transparent animate-spin",
    sizes: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    },
    color: `${fill[500][color]}`,
  };

  return `${structureClass.base} ${structureClass.sizes[size]} ${
    variant !== "gradient" ? structureClass.color : ""
  }`;
}

export function getGradientSpinner(color, index) {
  return `${fill[index][color]}`;
}

export function getContainerClass(fullWidth, align) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  fullWidth = fullWidth ? "w-full" : "w-max";

  return `${fullWidth} ${alignments[align]}`;
}
