<script setup>
import {
  getContainerClass,
  getTextareaClass,
  getLabelClass,
} from "./textarea.js";
import { variantStyle } from "../../utils/colors.js";
import { makeid } from "../../utils/generateID.js";

const uuid = makeid(7);

const props = defineProps({
  variant: {
    type: String,
    default: "outlined",
  },
  color: {
    type: String,
    default: "blue",
  },
  size: {
    type: String,
    default: "md",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: " ",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  resize: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const sizes = ["lg", "md"];

const variants = ["outlined", "standard", "static"];

function getClass(variant, size, color) {
  size = sizes.includes(size) ? props.size : "md";

  variant = variants.includes(variant) ? props.variant : "outlined";

  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  const containerClass = getContainerClass(size, variant);
  const textareaClass = getTextareaClass(
    variant,
    color,
    size,
    props.error,
    props.success,
    props.resize
  );
  const labelClass = getLabelClass(
    variant,
    color,
    size,
    props.error,
    props.success
  );

  return {
    containerClass,
    textareaClass,
    labelClass,
  };
}
</script>

<template>
  <div :id="id" :class="getClass(variant, size, color).containerClass">
    <textarea
      :id="uuid"
      :class="getClass(variant, size, color).textareaClass"
      :placeholder="variant == 'static' ? placeholder : ' '"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    />
    <label :for="uuid" :class="getClass(variant, size, color).labelClass">
      {{ label }}
    </label>
  </div>
</template>
