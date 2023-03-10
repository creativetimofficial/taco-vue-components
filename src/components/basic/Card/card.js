import { variantStyle } from "@/utils/colors.js";
import { shadow } from "@/utils/shadow.js";

export const body = "p-6";

export function getFooterClass(divider) {
  return `p-6 ${divider ? "border-t border-blue-gray-50" : ""}`;
}

export function getContainerClass(shadowValue, color, variant) {
  const shadowClass =
    color === "white" ? "" : color === "transparent" ? "shadow-none" : "";

  const shadowState =
    color === "white" || color === "transparent" ? true : false;

  const excludedColors = ["amber", "lime", "transparent", "white", "yellow"];

  const textColor = excludedColors.includes(color)
    ? "text-gray-700"
    : "text-white";

  const structureClass = {
    base: "flex flex-col rounded-xl bg-white bg-clip-border",
    shadow: "shadow-md",
    variant: `${variantStyle[variant][color]} ${
      shadowState ? shadowClass : shadow.opacity[40][color]
    } ${textColor}`,
  };

  return `${structureClass.base} ${structureClass.variant} ${
    shadowValue ? structureClass.shadow : ""
  }`;
}

export function getHeaderClass(color, variant, shadowValue, floated) {
  const shadowClass =
    color === "white" ? "" : color === "transparent" ? "shadow-none" : "";

  const shadowState =
    color === "white" || color === "transparent" ? true : false;

  const excludedColors = ["amber", "lime", "transparent", "white", "yellow"];

  const textColor = excludedColors.includes(color)
    ? "text-gray-700"
    : "text-white";

  const structureClass = {
    base: "mx-4 translate-y-0 rounded-xl",
    floated: "-mt-6",
    shadow: "shadow-lg",
    variant: `${variantStyle[variant][color]} ${
      shadowState ? shadowClass : shadow.opacity[40][color]
    } ${textColor}`,
  };

  return `${structureClass.base} ${floated ? structureClass.floated : "mt-4"} ${
    shadowValue ? structureClass.shadow : ""
  } ${structureClass.variant}`;
}
