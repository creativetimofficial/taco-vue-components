export function getClass(variant, size) {
  const structureClass = {
    base: "relative inline-block object-cover object-center",
    sizes: {
      xs: "h-6 w-6",
      sm: "h-9 w-9",
      md: "h-12 w-12",
      lg: "h-16 w-16",
      xl: "h-20 w-20",
      xxl: "h-24 w-24",
    },
    variants: {
      rounded: "rounded-lg",
      circular: "rounded-full",
    },
  };

  return `${structureClass.base} ${structureClass.sizes[size]} ${structureClass.variants[variant]}`;
}
