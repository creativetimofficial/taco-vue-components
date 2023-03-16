<script setup>
import { getFooterClass } from "./card";

const props = defineProps({
  divider: {
    type: Boolean,
    default: false,
  },
});

function getClasses() {
  const style = getFooterClass(props.divider);

  return `${style}`;
}
</script>

<template>
  <div :class="getClasses()">
    <slot />
  </div>
</template>
