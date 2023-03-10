<script setup>
import { labelClass, getInputClass } from "./range.js";
import { makeid } from "../../../utils/generateID.js";

const emit = defineEmits(["update:modelValue"]);

const uuid = makeid(7);

const props = defineProps({
  label: {
    type: String,
    default: "Range",
  },
  size: {
    type: String,
    default: "sm",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
  },
  min: {
    type: [String, Number],
  },
  max: {
    type: [String, Number],
  },
  step: {
    type: [String, Number],
  },
  id: {
    type: String,
  },
});

function getClassBySize(size) {
  const validSize = ["sm", "md", "lg"];
  size = validSize.includes(size) ? props.size : "sm";

  const style = getInputClass(size);

  return `${style}`;
}
</script>

<template>
  <div :id="id">
    <label :for="uuid" :class="labelClass">{{ label }}</label>
    <input
      :id="uuid"
      type="range"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.valueAsNumber)"
      :class="getClassBySize(size)"
    />
  </div>
</template>
