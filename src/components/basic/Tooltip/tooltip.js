export function getTooltipClass(placement) {
  const structureClass = {
    base: "bg-black rounded-lg text-white font-sans text-sm font-normal focus:outline-none break-words px-3 py-1.5 whitespace-normal z-[999] absolute min-w-max",
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      "top-start": "bottom-full left-0 mb-2",
      "top-end": "bottom-full right-0 mb-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      "left-start": "right-full top-0 mr-2",
      "left-end": "right-full bottom-0 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
      "right-start": "left-full top-0 ml-2",
      "right-end": "left-full bottom-0 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      "bottom-start": "top-full left-0 mt-2",
      "bottom-end": "top-full right-0 mt-2",
    },
  };

  return `${structureClass.base} ${structureClass.placement[placement]}`;
}

export const containerClass = "relative w-fit";
