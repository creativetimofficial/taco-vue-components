<script setup>
import {
  containerClass,
  rootClass,
  labelClass,
  getInputClass,
  containerIcon,
} from "./checkbox.js";
import { variantStyle } from "../../utils/colors.js";
import Ripple from "material-ripple-effects";
import { makeid } from "../../utils/generateID.js";

const rippleInit = new Ripple();

const uuid = makeid(7);

const props = defineProps({
  label: {
    type: String,
  },
  color: {
    type: String,
    default: "blue",
  },
  ripple: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

function setRipple(e) {
  props.ripple == "light" || props.ripple == "dark"
    ? rippleInit.create(e, props.ripple)
    : null;
}

function getClassesInput(color) {
  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  const style = getInputClass(color);

  return `${style}`;
}
</script>

<template>
  <div :id="id" :class="rootClass">
    <label :for="uuid" :class="containerClass" @click="(e) => setRipple(e)"
      ><input
        :id="uuid"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :class="getClassesInput(color)"
      />
      <div :class="containerIcon">
        <svg
          v-if="!$slots.default"
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <slot v-else />
      </div>
    </label>
    <label :for="uuid" v-if="label" :class="labelClass">{{ label }}</label>
  </div>
</template>
