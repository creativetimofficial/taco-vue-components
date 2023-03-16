export function getBodyClass(divider) {
  const dividerClass =
    "border-b border-b-blue-gray-100 border-t border-t-blue-gray-100";

  return `text-blue-gray-500 font-sans text-base antialiased font-light leading-relaxed p-4 relative ${
    divider ? dividerClass : ""
  }`;
}

export const backdrop =
  "backdrop-blur-sm bg-black bg-opacity-60 grid h-screen left-0 top-0 place-items-center fixed w-screen z-[9999]";

export function getContainerClass(size) {
  const structureClass = {
    base: "bg-white rounded-lg shadow-2xl text-blue-gray-500 font-sans text-base antialiased font-light leading-relaxed m-4 relative",
    sizes: {
      xs: "min-w-[25%] max-w-[25%] w-1/4",
      sm: "min-w-[33.333333%] max-w-[33.333333%] w-1/3",
      md: "min-w-[40%] max-w-[40%] w-2/5",
      lg: "min-w-[60%] max-w-[60%] w-3/5",
      xl: "min-w-[75%] max-w-[75%] w-3/4",
      xxl: "rounded-none flex flex-col h-screen m-0 max-h-[100vh] max-w-[100vw] min-h-[100vh] min-w-[100vw] w-screen",
    },
  };

  return `${structureClass.base} ${structureClass.sizes[size]}`;
}

export const footer =
  "items-center text-blue-gray-500 flex shrink-0 flex-wrap justify-end p-4";

export const header =
  "items-center text-blue-gray-900 flex shrink-0 font-sans text-2xl antialiased font-semibold leading-snug p-4";
