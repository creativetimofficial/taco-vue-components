import { states } from "@/utils/states.js";
import { text } from "@/utils/text.js";

export const containerClass =
  "rounded-full cursor-pointer inline-block h-4 w-8 relative";

export const rootClass = "items-center inline-flex";

export const labelClass =
  "text-gray-700 cursor-pointer font-light mb-0 ml-3 mt-px select-none";

export const rippleClass =
  "rounded-full inline-block left-2/4 p-5 top-2/4 -translate-x-2/4 -translate-y-2/4";

export const circleClass =
  "before:bg-blue-gray-500 before:rounded-full before:content[''] before:block before:h-10 before:left-2/4 before:opacity-0 hover:before:opacity-10 before:absolute before:top-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:w-10 bg-white border-blue-gray-100 rounded-full border shadow-md cursor-pointer h-5 -left-1 absolute top-2/4 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 w-5";

export function getInputClass(color) {
  const structureClass = {
    base: "appearance-none bg-blue-gray-100 rounded-full cursor-pointer h-4 peer absolute transition-colors duration-300 w-8",
    color: `${states.checked.colors[color]} ${states.peerChecked.border[color]} ${states.peerChecked.before.colors[color]}`,
  };

  return {
    style: `${structureClass.base} ${structureClass.color}`,
    color: structureClass.color,
  };
}
