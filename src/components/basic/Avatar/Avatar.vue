<script setup>
import { getClass } from "./avatar.js";
const props = defineProps({
  variant: {
    type: String,
    default: "rounded",
  },
  size: {
    type: String,
    default: "md",
  },
});

const sizeOptions = ["xs", "sm", "md", "lg", "xl", "xxl"];

const variantOptions = ["rounded", "circular"];

function getClasses(variant, size) {
  size = sizeOptions.includes(props.size) ? props.size : "md";
  variant = variantOptions.includes(props.variant) ? props.variant : "rounded";

  const style = getClass(variant, size);

  return `${style}`;
}
</script>

<template>
  <img
    :class="getClasses(variant, size)"
    src="https://www.material-tailwind.com/img/face-2.jpg"
  />
</template>
