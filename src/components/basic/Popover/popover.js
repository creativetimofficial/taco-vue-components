export function getPopoverClass(placement) {
  const structureClass = {
    base: "absolute min-w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none z-[999] ",
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      topstart: "bottom-full left-0 mb-2",
      topend: "bottom-full right-0 mb-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      leftstart: "right-full top-0 mr-2",
      leftend: "right-full bottom-0 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
      rightstart: "left-full top-0 ml-2",
      rightend: "left-full bottom-0 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      bottomstart: "top-full left-0 mt-2",
      bottomend: "top-full right-0 mt-2",
    },
  };

  return `${structureClass.base} ${structureClass.placement[placement]}`;
}

export const containerClass = "relative w-fit";
