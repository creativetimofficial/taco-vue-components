<script setup>
import {
  containerClass,
  rootClass,
  labelClass,
  getInputClass,
  containerCircle,
} from "./radio.js";
import { variantStyle } from "@/utils/colors.js";
import Ripple from "material-ripple-effects";
import { makeid } from "../../../utils/generateID.js";

const rippleInit = new Ripple();

const uuid = makeid(7);

const props = defineProps({
  label: {
    type: [String, Boolean, Number],
  },
  color: {
    type: String,
    default: "blue",
  },
  ripple: {
    type: String,
    default: null,
  },
  value: {
    type: [String, Boolean, Number],
  },
  modelValue: {
    type: [String, Boolean, Number],
  },
  name: {
    type: String,
    default: "radio",
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

  const radioClasses = getInputClass(color);

  return {
    input: radioClasses.style,
    color: radioClasses.color,
  };
}
</script>

<template>
  <div :id="id" :class="rootClass">
    <label :for="uuid" :class="containerClass" @click="(e) => setRipple(e)"
      ><input
        :id="uuid"
        :name="name"
        type="radio"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
        :value="value"
        :class="getClassesInput(color).input"
      />
      <div :class="[getClassesInput(color).color, containerCircle]">
        <svg
          v-if="!$slots.default"
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
        <slot v-else />
      </div>
    </label>
    <label v-if="label" :for="uuid" :class="labelClass">{{ label }}</label>
  </div>
</template>
