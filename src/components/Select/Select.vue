<script setup>
import {
  getContainerClass,
  getArrowClass,
  getLabelClass,
  menuClass,
  getOptionClass,
  getSelectClass,
  spanClass,
} from "./select.js";
import { variantStyle } from "../../utils/colors.js";
import { Transition, ref } from "vue";
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
  animation: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
  },
  modelValue: {
    type: String,
  },
  itemText: {
    type: String,
    default: "name",
  },
  itemValue: {
    type: String,
    default: "value",
  },
});

const emit = defineEmits(["update:modelValue"]);
const typeOptions = typeof props.options[0];
const selectedValue = ref("");
const selectState = ref(false);
const stateStatus = ref("close");

if (typeOptions === "object") {
  props.options.forEach((element) => {
    props.modelValue === element[props.itemValue]
      ? (selectedValue.value = element[props.itemText])
      : null;
  });
}

stateStatus.value =
  stateStatus.value === "close" && props.modelValue !== ""
    ? "withValue"
    : "close";

function openSelect() {
  selectState.value = !selectState.value;
  stateStatus.value =
    stateStatus.value === "withValue" || stateStatus.value === "close"
      ? "open"
      : "close";

  stateStatus.value === "close" && props.modelValue !== ""
    ? (stateStatus.value = "withValue")
    : null;
}

function clickOutsideSelect() {
  selectState.value = false;
  stateStatus.value = "close";
  stateStatus.value === "close" && props.modelValue !== ""
    ? (stateStatus.value = "withValue")
    : null;
}

const sizes = ["lg", "md"];

const variants = ["outlined", "standard", "static"];

function getClass(variant, size, color) {
  size = sizes.includes(size) ? props.size : "md";

  variant = variants.includes(variant) ? props.variant : "outlined";

  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

  const containerClass = getContainerClass(variant, size);
  const selectClass = getSelectClass(
    variant,
    color,
    props.error,
    props.success,
    size,
    stateStatus.value
  );
  const labelClass = getLabelClass(
    variant,
    color,
    props.error,
    props.success,
    size,
    stateStatus.value
  );

  return {
    container: containerClass,
    select: selectClass,
    label: labelClass,
  };
}
</script>

<template>
  <div
    :class="getClass(variant, size, color).container"
    @click="openSelect"
    v-click-outside="clickOutsideSelect"
  >
    <button
      :id="uuid"
      type="button"
      :class="getClass(variant, size, color).select"
      :disabled="disabled"
      aria-expanded="false"
      aria-haspopup="listbox"
      role="combobox"
    >
      <span :class="spanClass">{{
        selectedValue ? selectedValue : modelValue
      }}</span>
      <div :class="getArrowClass(stateStatus)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div></button
    ><label :for="uuid" :class="getClass(variant, size, color).label">{{
      label
    }}</label>
    <Transition
      :enter-from-class="animation ? 'opacity-0 translate-y-6' : ''"
      :leave-to-class="animation ? 'opacity-0' : ''"
      :enter-active-class="animation ? 'transition duration-300' : ''"
      :leave-active-class="
        animation ? 'transition translate-y-6 duration-300' : ''
      "
    >
      <ul
        v-if="selectState"
        tabindex="-1"
        role="listbox"
        :class="menuClass"
        :id="makeid(7)"
        aria-orientation="vertical"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          :id="makeid(7)"
          role="option"
          :class="[
            getOptionClass().base,
            modelValue === option[itemValue] || modelValue === option
              ? getOptionClass('active').state
              : '',
            typeOptions === 'object'
              ? option.disabled
                ? getOptionClass('disabled').state
                : ''
              : '',
          ]"
          tabindex="1"
          aria-selected="false"
          data-selected="false"
          :value="typeOptions === 'object' ? option[itemValue] : option"
          @click="
            $emit(
              'update:modelValue',
              typeOptions === 'object' ? option[itemValue] : option
            ),
              (selectedValue =
                typeOptions === 'object' ? option[itemText] : option)
          "
        >
          {{ typeOptions === "object" ? option[itemText] : option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>
