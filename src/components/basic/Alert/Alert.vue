<script setup>
import { variantStyle } from "@/utils/colors.js";
import { getClass, dismissibleClass, iconClass } from "./alert.js";
import { Transition } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "blue",
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  value: {
    type: Boolean,
    default: true,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "alertComp",
  },
});

const emit = defineEmits(["closed", "update:modelValue"]);

const options = ["filled", "gradient"];

function onClose() {
  emit("update:modelValue", false);
  emit("closed");
}

function getClasses(variant, color) {
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";
  variant = options.includes(props.variant) ? props.variant : "filled";

  const style = getClass(variant, color);

  return `${style}`;
}
</script>

<template>
  <Transition
    :enter-from-class="animation ? 'opacity-0 translate-y-6' : ''"
    :leave-to-class="animation ? 'opacity-0' : ''"
    :enter-active-class="animation ? 'transition duration-300' : ''"
    :leave-active-class="
      animation ? 'transition translate-y-6 duration-300' : ''
    "
  >
    <div :id="id" v-if="modelValue" :class="getClasses(variant, color)">
      <span v-if="$slots.icon" :class="iconClass">
        <slot name="icon" />
      </span>
      <span :class="{ 'ml-8': $slots.icon, 'mr-12': $slots.icon }">
        <slot />
      </span>
      <div v-if="dismissible" :class="dismissibleClass" @click="onClose">
        <div role="button" class="w-max p-1 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </Transition>
</template>
