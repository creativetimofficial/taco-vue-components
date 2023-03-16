<script setup>
import { getContainerClass, getBarClass } from "./progress.js";
import { variantStyle } from "../../utils/colors.js";

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "blue",
  },
  value: {
    type: [Number, String],
    default: "0",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
  },
});

const options = ["filled", "gradient"];

function getClasses(variant, color) {
  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  variant = options.includes(props.variant) ? props.variant : "filled";

  const style = getBarClass(variant, color);

  return `${style}`;
}
</script>

<template>
  <div :id="id" :class="getContainerClass(label ? true : false)">
    <div :class="getClasses(variant, color)" :style="{ width: value + '%' }">
      {{ label ? value + "% " : "" }}{{ label ? label : "" }}
    </div>
  </div>
</template>
