<script setup>
import { fileClass } from "./file.js";
import { makeid } from "../../utils/generateID.js";

const uuid = makeid(7);
</script>

<template>
  <input :class="fileClass" :id="uuid" type="file" />
</template>
