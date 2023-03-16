<script setup>
import {
  getNavbarClass,
  getItemClass,
  containerClass,
  listClass,
  buttonToggleClass,
  navbarButton,
  spanClass,
  getIconClass,
  linksClass,
} from "./navbar.js";
import { variantStyle } from "../../utils/colors.js";
import { ref } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "white",
  },
  blurred: {
    type: Boolean,
    default: true,
  },
  shadow: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
  },
  id: {
    type: String,
  },
});

const show = ref(false);

const options = ["filled", "gradient"];

function getClasses(variant, color) {
  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "white";

  variant = options.includes(variant) ? props.variant : "filled";

  const style = getNavbarClass(
    variant,
    color,
    props.blurred,
    props.fullWidth,
    props.shadow
  );

  return `${style}`;
}
</script>

<template>
  <nav :id="id" :class="getClasses(variant, color)">
    <div :class="containerClass">
      <span>
        <slot name="title" />
      </span>
      <ul :class="[listClass, show ? '' : 'hidden']">
        <li v-for="(item, index) in items" :key="index" :class="getItemClass(color)">
          <a :class="linksClass" :href="item.href">
            <span v-if="item.icon" v-html="item.icon"></span>
            {{ item.text }}
          </a>
        </li>
      </ul>
      <span :class="[spanClass, show ? '' : 'hidden']">
        <slot name="button" />
      </span>

      <button @click="show = !show" :class="buttonToggleClass" type="button">
        <span v-if="!show" :class="navbarButton"><svg xmlns="http://www.w3.org/2000/svg" :class="getIconClass(color)" fill="none"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg></span>
        <span v-else :class="navbarButton"><svg xmlns="http://www.w3.org/2000/svg" :class="getIconClass(color)" fill="none"
            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg></span>
      </button>
    </div>
  </nav>
</template>
