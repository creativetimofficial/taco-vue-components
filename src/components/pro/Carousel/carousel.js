import { variantStyle } from "@/utils/colors.js";
import { states } from "@/utils/states.js"

export const imageContainerClass = "pb-[56.25%] relative"
export const imageClass = "absolute h-full w-full object-cover border rounded-md"
export const beltContainerClass = "w-full flex items-center justify-between mt-6"

export function getContainerStyling(size){
  let structureClass = {
    base: `flex-col items-center justify-center `,
    sizes: {
      sm: "w-2/5",
      md: "w-3/5",
      lg: "w-4/5",
    },
  };

  return `${structureClass.base} ${structureClass.sizes[size]}`
}

export function getButtonStyling(position, size) {

  let structureClass = {
    base: `absolute top-1/2 rounded-lg font-bold transform -translate-y-5 text-white/80 hover:text-white hover:bg-gray-300/20`,
    position: position === "right" ? "right-0 mr-4" : "left-0 ml-4",
    sizes: {
      sm: "text-2xl",
      md: "text-4xl",
      lg: "text-5xl",
    },
  };

  return `${structureClass.base} ${structureClass.position} ${structureClass.color} ${structureClass.sizes[size]}`;
}

export function getBeltButtonStyling(active, color, colorActive){

  let structureClass = {
    base: `flex-1 rounded-full h-2.5 mr-2`,
    color: active==="true" ? `${variantStyle.filled[colorActive]}` : `${variantStyle.filled[color]}`
  }

  return `${structureClass.base} ${structureClass.color}`;
}