import { states } from "../../utils/states.js";


export const spanClass = "mb-1"
export const containerClass = "flex items-center justify-center p-2 border rounded-md border-slate-800 w-1/3"
export const inputClass = "w-2/5 pl-4 pr-2 py-3 leading-none rounded-lg shadow-sm focus:outline-none text-gray-600 font-medium"

export function getButtonStyling(color) {
  const excludedColors = ["amber", "lime", "yellow"];

  const hoverTextColor = excludedColors.includes(color)
    ? "hover:text-black"
    : "hover:text-white";

  let structureClass = {
    base: `w-6 h-6 flex items-center justify-center border rounded-full p-4 text-2xl ${hoverTextColor} transition mx-3`,
    color: `${states.hover.colors[500][color]}`,
  };

  return `${structureClass.base} ${structureClass.color}`;
}