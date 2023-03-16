<script setup>
import { variantStyle } from "../../utils/colors.js";
import { getContainerClass } from "./card";

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
});

const options = ["filled", "gradient"];

function getClasses(variant, color) {
  variant = options.includes(props.variant) ? props.variant : "filled";
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const style = getContainerClass(props.shadow, color, variant);

  return `${style}`;
}
</script>

<template>
  <div :class="getClasses(variant, color)">
    <slot />
  </div>
</template>
