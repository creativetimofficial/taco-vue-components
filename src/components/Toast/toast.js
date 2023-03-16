
export const titleClass = "flex justify-between items-center mb-3 font-semibold"
export const closingButtonClass = "cursor-pointer text-2xl"

export function getContainerClass(placement) {
    const structureClass = {
      base: "fixed p-4 w-1/5 bg-white border rounded-xl shadow-sm z-[999]",
      placement: {
        top: "top-10 left-1/2 -translate-x-1/2 mb-2",
        "top-start": "top-10 left-4 mb-2",
        "top-end": "top-10 right-4 mb-2",
        left: "left-10 top-1/2 -translate-y-1/2 mr-2",
        "left-start": "left-10 top-1/4 mr-2",
        "left-end": "left-10 bottom-1/4 mr-2",
        right: "right-10 top-1/2 -translate-y-1/2 mr-2",
        "right-start": "right-10 top-1/4 mr-2",
        "right-end": "right-10 bottom-1/4 mr-2",
        bottom: "bottom-10 left-1/2 -translate-x-1/2 mt-2",
        "bottom-start": "bottom-10 left-4 mt-2",
        "bottom-end": "bottom-10 right-4 mt-2",
      },
    };
  
    return `${structureClass.base} ${structureClass.placement[placement]}`;
  }