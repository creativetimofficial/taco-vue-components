<script setup>
import { variantStyle } from "@/utils/colors.js";
import {
  getStyling,
  getListClass,
  getOptionClass,
  getContainerClass,
} from "./dropdown.js";
import { Transition, ref } from "vue";
import { makeid } from "../../../utils/generateID.js";

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "blue",
  },
  button: {
    type: String,
    default: "Dropdown",
  },
  menu: {
    type: Array,
  },
});

const variantOptions = ["filled", "gradient", "outlined", "text"];
const sizeOptions = ["sm", "md", "lg"];
const selectState = ref(false);
const selectSecondaryState = ref(false);
const selectSecondaryStateId = ref(0);

function getButtonClasses(variant, size, color) {
  size = sizeOptions.includes(props.size) ? props.size : "md";
  variant = variantOptions.includes(props.variant) ? props.variant : "filled";
  color = variantStyle.filled.hasOwnProperty(props.color)
    ? props.color
    : "blue";

  const style = getStyling(color, variant, size);

  return `${style}`;
}

function openSelect() {
  selectState.value = !selectState.value;
}

function openSecondarySelect(id) {
  if (selectSecondaryStateId.value === id) {
    selectSecondaryState.value = !selectSecondaryState.value;
  } else {
    selectSecondaryStateId.value = id;
    selectSecondaryState.value = true;
  }
}

function openUrl(url) {
  window.open(url, "_blank");
}

function clickOutsideSelect() {
  selectState.value = false;
  selectSecondaryState.value = false;
}
</script>

<template>
  <div
    :class="getContainerClass('relative')"
    v-click-outside="clickOutsideSelect"
  >
    <button
      :class="getButtonClasses(variant, size, color)"
      @click="openSelect()"
    >
      {{ button }}
    </button>
    <Transition
      :enter-from-class="'opacity-0 translate-y-6'"
      :leave-to-class="'opacity-0'"
      :enter-active-class="'transition duration-300'"
      :leave-active-class="'transition translate-y-6 duration-300'"
    >
      <ul
        v-if="selectState"
        tabindex="-1"
        role="listbox"
        :class="getListClass(99, size, 'top')"
        :id="makeid(7)"
        aria-orientation="vertical"
      >
        <li
          v-for="(option, index) in menu"
          :key="index"
          :id="makeid(7)"
          role="option"
          :class="getOptionClass()"
          tabindex="1"
          aria-selected="false"
          data-selected="false"
          @click="
            option.items ? openSecondarySelect(index) : openUrl(option.url)
          "
        >
          {{ option.label }}
          <Transition
            :enter-from-class="'opacity-0 translate-y-6'"
            :leave-to-class="'opacity-0'"
            :enter-active-class="'transition duration-300'"
            :leave-active-class="'transition translate-y-6 duration-300'"
          >
            <ul
              v-if="
                option.items &&
                selectSecondaryState &&
                index == selectSecondaryStateId
              "
              tabindex="-1"
              role="listbox"
              :class="getListClass(99, size, 'left')"
              :id="makeid(7)"
              aria-orientation="vertical"
            >
              <li
                v-for="(option2, index2) in option.items"
                :key="index2"
                :id="makeid(7)"
                role="option2"
                :class="getOptionClass()"
                tabindex="1"
                aria-selected="false"
                data-selected="false"
                @click="openUrl(option2.url)"
              >
                {{ option2.label }}
              </li>
            </ul>
          </Transition>
        </li>
      </ul>
    </Transition>
  </div>
</template>
