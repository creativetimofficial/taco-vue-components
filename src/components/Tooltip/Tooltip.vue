<script setup>
import { getTooltipClass, containerClass } from "./tooltip.js";
import { Transition, ref } from "vue";

const props = defineProps({
  placement: {
    type: String,
    default: "top",
  },
  label: {
    type: String,
    default: "Tooltip",
  },
  animation: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
});

const show = ref(false);

const positions = [
  "top",
  "top-start",
  "top-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
];

function getClasses(placement) {
  placement = positions.includes(props.placement) ? props.placement : "top";

  const style = getTooltipClass(placement);

  return `${style}`;
}
</script>

<template>
  <div
    :id="id"
    :class="containerClass"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
    <Transition
      :enter-from-class="animation ? 'opacity-0' : ''"
      :leave-to-class="animation ? 'opacity-0' : ''"
      :enter-active-class="animation ? 'transition opacity-1 duration-500' : ''"
      :leave-active-class="animation ? 'transition opacity-1 duration-500' : ''"
    >
      <div v-if="show == true" :class="getClasses(placement)">
        {{ label }}
      </div>
    </Transition>
  </div>
</template>
