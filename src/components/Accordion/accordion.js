export function getAccordionClasses() {
  const structureClass = {
    base: "block relative w-full",
    body: "overflow-hidden block max-w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal",
    header:
      "outline-0 flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors",
    activeHeader: "text-blue-gray-900",
    disabledHeader: "pointer-events-none opacity-50",
    headerIcon: "w-5 h-5 ml-4",
  };

  return structureClass;
}
