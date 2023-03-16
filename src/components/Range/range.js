export const labelClass = "block mb-2 text-sm font-medium text-gray-900";

export function getInputClass(size) {
  const structureClass = {
    base: "border-none border-transparent cursor-pointer w-full",
    sizes: {
      sm: "h-[3px]",
      md: "h-[5px]",
      lg: "h-[7px]",
    },
  };

  return `${structureClass.base} ${structureClass.sizes[size]}`;
}
