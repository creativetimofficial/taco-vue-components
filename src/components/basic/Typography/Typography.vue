<script setup>
import Colors from "@material-tailwind/html/theme/base/colors";
import { getClass } from "./typography.js";
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "paragraph",
  },
  color: {
    type: String,
    default: "inherit",
  },
  textGradient: {
    type: Boolean,
    default: false,
  },
  as: {
    type: String,
  },
  id: {
    type: String,
  },
});

const tagName = computed(() => (props.as ? props.as : props.variant));

const options = [
  "h1",
  "h2",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "lead",
  "paragraph",
  "small",
];

function getClasses(variant, color) {
  variant = options.includes(props.variant) ? props.variant : "paragraph";

  color = Colors.hasOwnProperty(props.color) ? props.color : "inherit";

  const style = getClass(variant, color, props.textGradient);

  return `${style}`;
}
</script>

<template>
  <component
    v-if="tagName != 'paragraph'"
    :id="id"
    :is="tagName"
    :class="getClasses(variant, color)"
  >
    <slot />
  </component>

  <component v-else :id="id" is="p" :class="getClasses(variant, color)">
    <slot />
  </component>
</template>
