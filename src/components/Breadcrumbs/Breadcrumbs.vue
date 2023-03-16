<script setup>
import { getRootClass, separator, list, getItemClass } from "./breadcrumbs";

const props = defineProps({
  items: {
    type: Array,
  },
  divider: {
    type: String,
    default: "/",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
});
</script>

<template>
  <nav :id="id" :class="getRootClass(fullWidth)">
    <ol :class="list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="getItemClass(item.disabled)"
        :disabled="item.disabled"
      >
        <a
          :href="{ path: item.href }"
          :class="items.length - 1 !== index ? 'opacity-60' : ''"
        >
          {{ item.text }}
        </a>
        <span v-if="items.length - 1 !== index" :class="separator">{{
          divider
        }}</span>
      </li>
    </ol>
  </nav>
</template>
