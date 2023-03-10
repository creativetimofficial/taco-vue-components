<script setup>
import { getBodyClass } from "./dialog.js";

const props = defineProps({
  divider: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="getBodyClass(divider)">
    <slot />
  </div>
</template>
