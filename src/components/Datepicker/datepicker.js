export function getClasses() {
  const structureClass = {
    calendarIconDiv: "absolute top-1/4 right-[5%] pointer-events-none",
    datepickerDiv:
      "w-[17rem] bg-white top-full mt-2 rounded-lg shadow p-2 absolute z-50 select-none",
    datepickerHeaderDiv: "flex justify-between items-center mb-3",
    dayNamesDiv: "flex flex-wrap mb-3",
    daysDiv: "flex flex-wrap",
    dayButton1:
      "cursor-pointer text-center text-sm text-white font-normal rounded-full bg-[#e91e63] hover:bg-opacity-75 transition-all ease-in-out duration-100",
    dayButton2:
      "cursor-pointer text-center text-sm text-white font-normal rounded-full bg-[#54e91e] hover:bg-opacity-75 transition-all ease-in-out duration-100",
    dayButton3:
      "cursor-pointer text-center text-sm text-[#393939] font-normal rounded-full hover:bg-blue-600 hover:bg-opacity-25 transition-all ease-in-out duration-100",
    label: "font-bold mb-1 text-gray-700 block",
    input:
      "w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm border border-gray-200 focus:outline-none text-gray-600 font-medium focus:ring focus:ring-blue-600 focus:ring-opacity-50",
    buttonLtGt:
      "focus:outline-none focus:shadow-outline transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 p-1 rounded-full",
  };

  return structureClass;
}
