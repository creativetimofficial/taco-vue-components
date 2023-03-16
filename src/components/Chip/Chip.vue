<script setup>
import {
  getClass,
  getButtonClassChip,
  iconClass,
  dismissibleClass,
} from "./chip.js";
import { variantStyle } from "../../utils/colors.js";
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
  show: {
    type: Boolean,
    default: true,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  value: {
    type: Boolean,
    default: true,
  },
  animation: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(["closed", "update:modelValue"]);

function onClose() {
  emit("update:modelValue", false);
  emit("closed");
}

const options = ["filled", "gradient"];

function getClasses(variant, color) {
  variant = options.includes(props.variant) ? props.variant : "filled";
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const style = getClass(variant, color);

  return `${style}`;
}

function getColorButton(color) {
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const style = getButtonClassChip(color);

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
      <div
        :class="{
          'ml-4': $slots.icon,
          'mt-px': $slots.icon || dismissible,
          'mr-5': dismissible,
        }"
        class="font-bold"
      >
        <slot />
      </div>
      <div
        v-if="dismissible"
        :class="[dismissibleClass, getColorButton(color)]"
        @click="onClose"
      >
        <div role="button" class="w-5 h-5 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
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
