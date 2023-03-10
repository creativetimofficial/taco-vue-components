<script setup>
import { header } from "./dialog.js";
</script>

<template>
  <div :class="header">
    <slot />
  </div>
</template>
