<script setup>
import { makeid } from "../../utils/generateID.js";
import { getAccordionClasses } from "./accordion.js";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: Boolean,
    default: null,
  },
});

const uuid = makeid(7);
</script>

<template>
  <div :id="uuid" :class="getAccordionClasses().base">
    <slot />
  </div>
</template>
