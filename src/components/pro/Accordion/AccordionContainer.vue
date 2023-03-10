<script setup>
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  active: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="w-full">
    <slot />
  </div>
</template>
