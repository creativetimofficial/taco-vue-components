<script setup>
import { reactive, getCurrentInstance } from "vue";
import { getAccordionClasses } from "./accordion.js";

const instance = reactive(getCurrentInstance());

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "blue",
  },
  activeIcon: {
    type: String,
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-auto"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>`,
  },
  inactiveIcon: {
    type: String,
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-auto"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>`,
  },
});

function getActiveClasses() {
  const active = getAccordionClasses().activeHeader;

  if (instance.parent.props.open ?? true) {
    return `${active}`;
  }

  return "";
}

function getDisabledClasses() {
  const disabled = getAccordionClasses().disabledHeader;

  if (instance.parent.props.disabled ?? true) {
    return `${disabled}`;
  }

  return "";
}

function openAccordion() {
  if (instance.parent.parent.props.multiple) {
    instance.parent.props.open = !instance.parent.props.open;
  } else if (
    instance.parent.parent.props.active === instance.parent.setupState.uuid
  ) {
    instance.parent.parent.props.active = "";
  } else {
    instance.parent.parent.props.active = instance.parent.setupState.uuid;
  }
}
function isThisOpen() {
  if (instance.parent.parent.props.multiple) {
    return instance.parent.props.open;
  } else if (
    instance.parent.parent.props.active === instance.parent.setupState.uuid
  ) {
    return true;
  }

  return false;
}
</script>

<template>
  <button
    type="button"
    :class="`${
      getAccordionClasses().header
    } ${getActiveClasses()} ${getDisabledClasses()}`"
    @click="openAccordion()"
  >
    <slot />

    <span
      v-html="isThisOpen() ? inactiveIcon : activeIcon"
      :class="getAccordionClasses().headerIcon"
    ></span>
  </button>
</template>
