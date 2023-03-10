<script setup>
import { Transition, ref } from "vue";
import { getPopoverClass } from "./popover.js";

const props = defineProps({
  placement: {
    type: String,
    default: "top",
  },
  animation: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

let show = ref(false);

function onClickOutside() {
  show.value = false;
}

function onClick() {
  show.value = !show.value;
  emit("click");
}
</script>

<template>
  <div class="relative w-fit" v-click-outside="onClickOutside">
    <span @click="onClick">
      <slot />
    </span>
    <Transition
      :enter-from-class="animation ? 'opacity-0' : ''"
      :leave-to-class="animation ? 'opacity-0' : ''"
      :enter-active-class="animation ? 'transition opacity-1 duration-500' : ''"
      :leave-active-class="animation ? 'transition opacity-1 duration-500' : ''"
    >
      <div
        v-if="show == true"
        :class="[getPopoverClass(placement), 'absolute min-w-max']"
      >
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>
