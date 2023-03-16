<script setup>
import { validationClass } from "./validation.js";
const props = defineProps({
  errors: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div v-if="errors && errors.length" :class="validationClass">
    {{ errors }}
  </div>
</template>
