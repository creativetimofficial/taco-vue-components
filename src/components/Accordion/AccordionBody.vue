<script setup>
import { reactive, getCurrentInstance } from "vue";
import { getAccordionClasses } from "./accordion.js";

const instance = reactive(getCurrentInstance());

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "blue",
  },
  animation: {
    type: Boolean,
    default: true,
  },
});

function animate() {
  return instance.parent.props.animation ?? props.animation;
}
</script>

<template>
  <div
    v-if="
      !instance.parent.parent.props.multiple
        ? instance.parent.parent.props.active === instance.parent.setupState.uuid
        : instance.parent.props.open
    "
    :class="getAccordionClasses().body"
  >
    <slot />
  </div>
</template>
