<script setup>
import { variantStyle } from "../../utils/colors.js";
import Ripple from "material-ripple-effects";
import { getStyling } from "./button.js";

const rippleInit = new Ripple();

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "blue",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: String,
    default: null,
  },
});

function setRipple(e) {
  props.ripple == "light" || props.ripple == "dark"
    ? rippleInit.create(e, props.ripple)
    : null;
}

const variantOptions = ["filled", "gradient", "outlined", "text"];
const sizeOptions = ["sm", "md", "lg"];

function getClasses(variant, size, color) {
  size = sizeOptions.includes(props.size) ? props.size : "md";
  variant = variantOptions.includes(props.variant) ? props.variant : "filled";
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const valueFullWidth = props.fullWidth === true ? "w-full" : "";

  const style = getStyling(color, variant, size);

  return `${valueFullWidth} ${style}`;
}
</script>

<template>
  <button
    :class="getClasses(variant, size, color)"
    @click="(e) => setRipple(e)"
  >
    <slot />
  </button>
</template>
