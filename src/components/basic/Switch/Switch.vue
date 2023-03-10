<script setup>
import {
  containerClass,
  rootClass,
  labelClass,
  rippleClass,
  getInputClass,
  circleClass,
} from "./switch.js";
import { variantStyle } from "@/utils/colors.js";
import Ripple from "material-ripple-effects";
import { makeid } from "../../../utils/generateID.js";

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
  trueValue: {
    type: [String, Boolean, Number],
    default: true,
  },
  falseValue: {
    type: [String, Boolean, Number],
    default: false,
  },
  modelValue: {
    type: [String, Boolean, Number],
  },
  id: {
    type: String,
  },
});

function setRipple(e) {
  props.ripple == "light" || props.ripple == "dark"
    ? rippleInit.create(e, props.ripple)
    : null;
}

function getClassesInput(color) {
  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  const switchClasses = getInputClass(color);

  return {
    input: switchClasses.style,
    color: switchClasses.color,
  };
}
</script>

<template>
  <div :id="id" :class="rootClass">
    <div :class="containerClass">
      <input
        :id="uuid"
        type="checkbox"
        :class="getClassesInput(color).input"
        :checked="modelValue === trueValue"
        @change="
          $emit(
            'update:modelValue',
            trueValue === modelValue ? falseValue : trueValue
          )
        "
      />
      <label :for="uuid" :class="[circleClass, getClassesInput(color).color]">
        <div :class="rippleClass" @click="(e) => setRipple(e)"></div>
      </label>
    </div>
    <label v-if="label" :for="uuid" :class="labelClass">{{ label }}</label>
  </div>
</template>
