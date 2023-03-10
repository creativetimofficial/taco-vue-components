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
      !this.$.parent.parent.props.multiple
        ? this.$.parent.parent.props.active === this.$.parent.setupState.uuid
        : this.$.parent.props.open
    "
    :class="getAccordionClasses().body"
  >
    <slot />
  </div>
</template>
