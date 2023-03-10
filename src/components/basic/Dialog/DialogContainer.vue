<script setup>
import { backdrop, getContainerClass } from "./dialog.js";
import { ref, watch, Transition } from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  animation: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
});

const showContent = ref(false);

watch(
  () => props.open,
  (newValue) => {
    newValue
      ? document.body.style.setProperty("overflow", "hidden")
      : (document.body.style.overflow = null);
  }
);

const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

function getClasses(size) {
  size = sizes.includes(size) ? props.size : "md";

  const style = getContainerClass(size);

  return `${style}`;
}
</script>

<template>
  <Transition
    name="fade"
    :enter-from-class="animation ? 'opacity-0' : ''"
    :leave-to-class="animation ? 'opacity-0' : ''"
    :enter-active-class="animation ? 'transition opacity-1 duration-500' : ''"
    :leave-active-class="animation ? 'transition opacity-1 duration-500' : ''"
    @enter="animation ? (showContent = true) : null"
    @before-leave="animation ? (showContent = false) : null"
  >
    <div :id="id" v-if="open" :class="backdrop">
      <Transition
        :enter-from-class="
          animation ? 'transition scale-50 opacity-0 -translate-y-28' : ''
        "
        :enter-active-class="animation ? 'transition duration-500' : ''"
      >
        <div
          v-if="animation ? showContent : open"
          tabindex="-1"
          :class="getClasses(size)"
        >
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>
