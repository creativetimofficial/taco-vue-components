import { states } from "@/utils/states.js";
import { text } from "@/utils/text.js";
import { border } from "@/utils/border.js";

export function getContainerClass(variant, size) {
  const structureClass = {
    base: "min-w-[200px] relative w-full",
    variants: {
      outlined: {
        sizes: {
          lg: "h-11",
          md: "h-10",
        },
      },
      standard: {
        sizes: {
          lg: "h-12",
          md: "h-11",
        },
      },
      static: {
        sizes: {
          lg: "h-12",
          md: "h-11",
        },
      },
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant].sizes[size]}`;
}

export function getArrowClass(active) {
  return `${
    active === "open" ? "rotate-180 mt-px " : ""
  }text-blue-gray-400 grid h-5 place-items-center absolute pt-px right-2 top-2/4 rotate-0 -translate-y-2/4 transition-all w-5`;
}

export function getLabelClass(variant, color, error, success, size, state) {
  const structureClass = {
    base: "flex font-normal h-full left-0 pointer-events-none absolute transition-all select-none w-full after:content[' '] after:block",
    variants: {
      outlined: {
        base: "after:rounded-tr-md after:box-border peer-disabled:after:border-transparent after:flex-grow after:h-1.5 after:ml-1 after:mt-[6.5px] after:pointer-events-none after:transition-all after:w-2.5 before:rounded-tl-md before:box-border before:content[' '] peer-disabled:before:border-transparent before:block before:h-1.5 before:mr-1 before:mt-[6.5px] before:pointer-events-none before:transition-all before:w-2.5 -top-1.5",
        colors: {
          close:
            "after:border-transparent before:border-transparent text-blue-gray-400",
          open: `${states.before.border[color]} ${states.after.border[color]} ${text[color]}`,
          withValue:
            "after:border-blue-gray-200 before:border-blue-gray-200 text-blue-gray-400",
        },
        error: "after:border-red-500 before:border-red-500 text-red-500",
        success:
          "after:border-green-500 before:border-green-500 text-green-500",
        sizes: {
          lg: {
            close: "leading-[4.1]",
            open: "leading-tight",
            withValue: "leading-tight",
          },
          md: {
            close: "leading-[3.75]",
            open: "leading-tight",
            withValue: "leading-tight",
          },
        },
        states: {
          close:
            "text-sm after:border-r-transparent after:border-t-transparent before:border-l-transparent before:border-t-transparent peer-disabled:text-blue-gray-400",
          open: "after:border-r-2 after:border-t-2 before:border-l-2 before:border-t-2 peer-disabled:text-transparent text-[11px]",
          withValue:
            "after:border-r after:border-t before:border-l before:border-t peer-disabled:text-transparent text-[11px]",
        },
      },
      standard: {
        base: "after:border-b-2 after:-bottom-1.5 left-0 after:absolute after:transition-transform after:duration-300 after:w-full -top-1.5",
        colors: {
          close: `text-blue-gray-500 ${states.after.border[color]}`,
          open: `${states.after.border[color]} ${text[color]}`,
          withValue: `text-blue-gray-500 ${states.after.border[color]}`,
        },
        error: "after:border-red-500 text-red-500",
        success: "after:border-green-500 text-green-500",
        sizes: {
          lg: {
            close: "leading-[4.875]",
            open: "leading-tight",
            withValue: "leading-tight",
          },
          md: {
            close: "leading-[4.25]",
            open: "leading-tight",
            withValue: "leading-tight",
          },
        },
        states: {
          close: "after:scale-x-0 peer-disabled:text-blue-gray-400 text-sm",
          open: "after:scale-x-100 peer-disabled:text-transparent text-[11px]",
          withValue:
            "after:scale-x-0 peer-disabled:text-transparent text-[11px]",
        },
      },
      static: {
        base: "after:border-b-2 after:-bottom-2.5 left-0 after:absolute after:transition-transform after:duration-300 after:w-full -top-2.5",
        colors: {
          close: `text-blue-gray-500 ${states.after.border[color]}`,
          open: `${states.after.border[color]} ${text[color]}`,
          withValue: `text-blue-gray-500 ${states.after.border[color]}`,
        },
        error: "after:border-red-500 text-red-500",
        success: "after:border-green-500 text-green-500",
        sizes: {
          lg: "leading-tight",
          md: "leading-tight",
        },
        states: {
          close: "after:scale-x-0 peer-disabled:text-blue-gray-400 text-sm",
          open: "after:scale-x-100 peer-disabled:text-transparent text-sm",
          withValue: "after:scale-x-0 peer-disabled:text-transparent text-sm",
        },
      },
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant].base} ${
    error || success ? "" : structureClass.variants[variant].colors[state]
  } ${error ? structureClass.variants[variant].error : ""} ${
    success ? structureClass.variants[variant].success : ""
  } ${
    typeof structureClass.variants[variant].sizes[size] === "object"
      ? structureClass.variants[variant].sizes[size][state]
      : structureClass.variants[variant].sizes[size]
  } ${structureClass.variants[variant].states[state]}`;
}

export const menuClass =
  "bg-white border border-blue-gray-50 rounded-md shadow-lg shadow-blue-gray-500/10 text-blue-gray-500 font-sans text-sm font-normal max-h-96 focus:outline-none overflow-auto p-3 w-full z-[99] top-2.5";

export function getOptionClass(state) {
  const structureClass = {
    base: "hover:bg-blue-gray-50 focus:bg-blue-gray-50 rounded-md hover:text-blue-gray-900 focus:text-blue-gray-900 cursor-pointer leading-tight hover:bg-opacity-80 focus:bg-opacity-80 outline outline-0 pb-2 pt-[9px] px-3 transition-all select-none",
    states: {
      active: "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900",
      disabled: "cursor-not-allowed opacity-50 pointer-events-none select-none",
    },
  };

  return {
    base: structureClass.base,
    state: structureClass.states[state],
  };
}

export function getSelectClass(variant, color, error, success, size, state) {
  const structureClass = {
    base: "bg-transparent text-blue-gray-700 disabled:bg-blue-gray-50 disabled:border-0 font-sans font-normal h-full outline outline-0 focus:outline-0 peer text-left transition-all w-full",
    variants: {
      outlined: {
        colors: {
          close: "border-blue-gray-200",
          open: `${border[color]} border-t-transparent`,
          withValue: "border-blue-gray-200 border-t-transparent",
        },
        error: {
          close: "border-red-500",
          open: `border-red-500 border-t-transparent`,
          withValue: "border-red-500 border-t-transparent",
        },
        success: {
          close: "border-green-500",
          open: `border-green-500 border-t-transparent`,
          withValue: "border-green-500 border-t-transparent",
        },
        sizes: {
          lg: "rounded-[7px] text-sm px-3 py-3",
          md: "rounded-[7px] text-sm px-3 py-2.5",
        },
        states: {
          close: "border",
          open: "border-t-transparent border-2",
          withValue: "border border-t-transparent",
        },
      },
      standard: {
        colors: {
          close: "border-blue-gray-200",
          open: `${border[color]}`,
          withValue: "border-blue-gray-200",
        },
        error: "border-red-500",
        success: "border-green-500",
        sizes: {
          lg: "text-sm pb-2 pt-5 px-px",
          md: "text-sm pb-1.5 pt-4",
        },
        states: "border-b",
      },
      static: {
        colors: {
          close: "border-blue-gray-200",
          open: `${border[color]}`,
          withValue: "border-blue-gray-200",
        },
        error: "border-red-500",
        success: "border-green-500",
        sizes: {
          lg: "text-sm pb-2 pt-5 px-px",
          md: "text-sm pb-1.5 pt-4",
        },
        states: "border-b",
      },
    },
  };

  return `${structureClass.base} ${
    error || success ? "" : structureClass.variants[variant].colors[state]
  } ${
    !error
      ? ""
      : typeof structureClass.variants[variant].error === "object"
      ? structureClass.variants[variant].error[state]
      : structureClass.variants[variant].error
  } ${
    !success
      ? ""
      : typeof structureClass.variants[variant].success === "object"
      ? structureClass.variants[variant].success[state]
      : structureClass.variants[variant].success
  } ${structureClass.variants[variant].sizes[size]} ${
    typeof structureClass.variants[variant].states === "object"
      ? structureClass.variants[variant].states[state]
      : structureClass.variants[variant].states
  }`;
}

export const spanClass = "absolute top-2/4 -translate-y-2/4 left-3 pt-0.5";
