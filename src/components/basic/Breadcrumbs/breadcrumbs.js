export function getRootClass(fullWidth) {
  return `${fullWidth ? "w-full block" : "w-max"}`;
}

export const separator =
  "text-blue-gray-500 font-sans text-sm antialiased font-normal leading-normal pointer-events-none mx-2 select-none";

export function getItemClass(disabled) {
  return `items-center text-blue-gray-900 flex font-sans text-sm antialiased font-normal hover:text-light-blue-500 leading-normal transition-colors duration-300 ${
    disabled ? "pointer-events-none" : ""
  }`;
}

export const list =
  "items-center bg-blue-gray-50 bg-opacity-60 rounded-md flex flex-wrap px-4 py-2 w-full";
