export function getContainerClass() {
  const structureClass = {
    one: "w-full",
    two: "relative right-0",
  };

  return structureClass;
}

export function getListClass() {
  const structureClass = {
    headers:
      "relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1",
  };
  return structureClass;
}

export function getAnimationRectangleClass() {
  const structureClass = {
    div: `z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block shadow p-0`,
    a: "z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 px-0 py-1 transition-all ease-in-out bg-white text-white",
  };

  return structureClass;
}

export function getOptionClass() {
  const structureClass = {
    li: "z-30 flex-auto text-center",
    a: "text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out",
    para: "block font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased",
  };

  return structureClass;
}
