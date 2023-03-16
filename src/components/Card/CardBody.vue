<script setup>
import { body } from "./card";
</script>

<template>
  <div :class="body">
    <slot />
  </div>
</template>
