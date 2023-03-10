<script setup>
import {
  getContainerClass,
  getIconClass,
  getInputClass,
  getLabelClass,
} from "./input.js";
import { variantStyle } from "@/utils/colors.js";
import { useSlots } from "vue";
import { makeid } from "../../../utils/generateID.js";

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
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
});

const slots = useSlots();

const emit = defineEmits(["update:modelValue"]);

const sizes = ["lg", "md"];

const variants = ["outlined", "standard", "static"];

function getClassStyle(variant, size, color) {
  size = sizes.includes(size) ? props.size : "md";

  variant = variants.includes(variant) ? props.variant : "outlined";

  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  const containerClass = getContainerClass(size, variant);
  const iconClass = getIconClass(size, variant);
  const inputClass = getInputClass(
    variant,
    color,
    size,
    props.error,
    props.success,
    slots.default
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
    iconClass,
    inputClass,
    labelClass,
  };
}
</script>

<template>
  <div :id="id" :class="getClassStyle(variant, size, color).containerClass">
    <div
      v-if="$slots.default"
      :class="getClassStyle(variant, size, color).iconClass"
    >
      <slot />
    </div>
    <input
      :id="uuid"
      :class="getClassStyle(variant, size, color).inputClass"
      :placeholder="variant == 'static' ? placeholder : ' '"
      :type="type"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    />
    <label :for="uuid" :class="getClassStyle(variant, size, color).labelClass">
      {{ label }}
    </label>
  </div>
</template>
