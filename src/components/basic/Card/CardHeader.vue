<script setup>
import { variantStyle } from "@/utils/colors.js";
import { getHeaderClass } from "./card";

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "blue",
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  floated: {
    type: Boolean,
    default: false,
  },
});

const options = ["filled", "gradient"];

function getClasses(variant, color) {
  variant = options.includes(props.variant) ? props.variant : "filled";
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const style = getHeaderClass(color, variant, props.shadow, props.floated);

  return `${style}`;
}
</script>

<template>
  <div :class="getClasses(variant, color)">
    <slot />
  </div>
</template>
