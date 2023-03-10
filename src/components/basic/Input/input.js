import { states } from "@/utils/states.js";

export function getContainerClass(size, variant) {
  const structureClass = {
    base: "w-full relative min-w-[200px]",
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

export function getIconClass(size, variant) {
  const structureClass = {
    base: "absolute grid place-items-center text-blue-gray-500",
    variants: {
      outlined: "top-2/4 right-3 -translate-y-2/4",
      standard: "top-2/4 right-0 -translate-y-1/4",
      static: "top-2/4 right-0 -translate-y-1/4",
    },
    sizes: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant]} ${structureClass.sizes[size]}`;
}

export function getInputClass(variant, color, size, error, success, icon) {
  const structureClass = {
    base: "peer h-full w-full bg-transparent text-blue-gray-700 font-normal font-sans outline outline-0 transition-all focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border-blue-gray-200",
    variants: {
      outlined: {
        base: `placeholder-shown:border placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent border focus:border-2 ${
          icon ? "!pr-9" : ""
        }`,
        color: `border-blue-gray-200 ${states.focus.border[color]}`,
        error:
          "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500 focus:border-red-500",
        success:
          "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500 focus:border-green-500",
        sizes: {
          lg: "rounded-md text-sm px-3 py-3",
          md: "rounded-[7px] text-sm px-3 py-2.5",
        },
      },
      standard: {
        base: `border-b ${icon ? "!pr-7" : ""}`,
        color: `border-blue-gray-200 ${states.focus.border[color]}`,
        error:
          "border-red-500 placeholder-shown:border-red-500 focus:border-red-500",
        success:
          "border-green-500 placeholder-shown:border-green-500 focus:border-green-500",
        sizes: {
          lg: "text-sm pb-2 pt-5 px-px",
          md: "text-sm pb-1.5 pt-4",
        },
      },
      static: {
        base: `border-b ${icon ? "!pr-7" : ""}`,
        color: `border-blue-gray-200 ${states.focus.border[color]}`,
        error:
          "border-red-500 placeholder-shown:border-red-500 focus:border-red-500",
        success:
          "border-green-500 placeholder-shown:border-green-500 focus:border-green-500",
        sizes: {
          lg: "text-sm pb-2 pt-5 px-px",
          md: "text-sm pb-1.5 pt-4",
        },
      },
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant].base} ${
    error || success ? "" : structureClass.variants[variant].color
  } ${error ? structureClass.variants[variant].error : ""} ${
    success ? structureClass.variants[variant].success : ""
  } ${structureClass.variants[variant].sizes[size]}`;
}

export function getLabelClass(variant, color, size, error, success) {
  const structureClass = {
    base: "absolute left-0 w-full h-full font-normal flex transition-all select-none pointer-events-none leading-tight peer-focus:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 after:content[' '] after:block",
    variants: {
      outlined: {
        base: " peer-disabled:after:border-transparent after:flex-grow after:border-r peer-focus:after:border-r-2  after:border-t peer-focus:after:border-t-2 after:h-1.5 after:ml-1 after:mt-[6.5px] after:pointer-events-none after:transition-all after:w-2.5 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:box-border peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:box-border  before:content[' '] peer-disabled:before:border-transparent before:block before:border-l peer-focus:before:border-l-2 before:border-t peer-focus:before:border-t-2 before:h-1.5 before:mr-1 before:mt-[6.5px] before:pointer-events-none before:transition-all before:w-2.5 text-[11px] peer-focus:text-[11px] peer-placeholder-shown:text-sm -top-1.5",
        color: `text-blue-gray-400 ${states.peerFocus.text[color]} before:border-blue-gray-200 ${states.peerFocus.before.border[color]} after:border-blue-gray-200 ${states.peerFocus.after.border[color]}`,
        error:
          "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500 before:border-red-500 peer-focus:before:border-red-500 after:border-red-500 peer-focus:after:border-red-500",
        success:
          "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500 before:border-green-500 peer-focus:before:border-green-500 after:border-green-500 peer-focus:after:border-green-500",
        sizes: {
          lg: "peer-placeholder-shown:leading-[4.1]",
          md: "peer-placeholder-shown:leading-[3.75]",
        },
      },
      standard: {
        base: "after:border-b-2 after:-bottom-1.5 peer-focus:after:scale-x-100 left-0 after:absolute after:scale-x-0 after:transition-transform after:duration-300 after:w-full text-[11px] peer-focus:text-[11px] peer-placeholder-shown:text-sm -top-1.5",
        color: `text-blue-gray-500 ${states.peerFocus.text[color]} ${states.after.border[color]} ${states.peerFocus.after.border[color]}`,
        error:
          "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500 after:border-red-500 peer-focus:after:border-red-500",
        success:
          "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500 after:border-green-500 peer-focus:after:border-green-500",
        sizes: {
          lg: "peer-placeholder-shown:leading-[4.875]",
          md: "peer-placeholder-shown:leading-[4.25]",
        },
      },
      static: {
        base: "after:border-b-2 after:-bottom-2.5 peer-focus:after:scale-x-100 left-0 after:absolute after:scale-x-0 after:transition-transform after:duration-300 after:w-full text-sm peer-focus:text-sm -top-2.5",
        color: `text-blue-gray-500 ${states.peerFocus.text[color]} ${states.after.border[color]} ${states.peerFocus.after.border[color]}`,
        error:
          "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500 after:border-red-500 peer-focus:after:border-red-500",
        success:
          "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500 after:border-green-500 peer-focus:after:border-green-500",
        sizes: {
          lg: "peer-placeholder-shown:leading-tight",
          md: "peer-placeholder-shown:leading-tight",
        },
      },
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant].base} ${
    error || success ? "" : structureClass.variants[variant].color
  } ${error ? structureClass.variants[variant].error : ""} ${
    success ? structureClass.variants[variant].success : ""
  } ${structureClass.variants[variant].sizes[size]}`;
}
