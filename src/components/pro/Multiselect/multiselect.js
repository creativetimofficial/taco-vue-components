import { states } from "@/utils/states.js";
import { variantStyle } from "@/utils/colors.js";

export const headerClass = "flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg cursor-pointer shadow-sm"
export const badgesContainer = "flex flex-row flex-wrap"
export const dropdownContainer = "absolute shadow-lg top-100 bg-white z-40 w-full left-0 max-h-select py-4 px-2 rounded-lg mt-2"

export function getContainerClass(size) {
    const structureClass = {
        base: "relative",
        sizes: {
            sm: "w-3/4",
            lg: "w-full",
        },
    }

    return `${structureClass.base} ${structureClass.sizes[size]}`;
};

export function getBadgeClass(color) {
    const excludedColors = ["amber", "lime", "yellow"];

    const textColor = excludedColors.includes(color)
        ? "text-black"
        : "text-white";

    const structureClass = {
        base: "rounded-full py-1 px-2 my-1 mx-1",
        color: `${variantStyle.filled[color]} ${textColor}`
    }

    return `${structureClass.base} ${structureClass.color}`
}

export function getDropdownClass(dropDownOpen){

    const structureClass = {
        base: "m-2",
        orientation: dropDownOpen ? "rotate-180" : ""
    }

    return `${structureClass.base} ${structureClass.orientation}`
}

export function getItemClass(isSelected){

    const structureClass = {
        base: "py-2 hover:bg-gray-100",
        background: isSelected ? "bg-gray-100" : ""
    }

    return `${structureClass.base} ${structureClass.background}`
}