export function getContainerClass() {
  const structureClass = {
    one: "block relative w-fit py-1",
    two: "flex relative rounded-lg shadow-lg p-0.5 border border-gray-200",
    three:
      "bg-white hover:bg-grey-100 cursor-pointer bg-transparent py-2 px-1 appearance-none outline-none text-gray-800 uppercase mr-3",
    divider: "py-2 px-1 appearance-none outline-none text-gray-800",
  };

  return structureClass;
}

export function getInputClass() {
  const structureClass = {
    base: "bg-white hover:bg-grey-100 cursor-pointer bg-transparent py-2 px-1 appearance-none outline-none text-gray-800 rounded-lg shadow-sm border border-gray-200",
  };

  return structureClass.base;
}
