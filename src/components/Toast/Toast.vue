
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getContainerClass, titleClass, closingButtonClass } from './toast';

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    required: true
  },
  placement: {
    type: String,
    default: "top"
  },
  time: {
    type: Number,
    default: 0
  }
})

const visible = ref(true)
const positions = [
  "top",
  "top-start",
  "top-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
];

const hideNotification = () => {
  visible.value = false
}

onMounted(() => {

  if (props.time > 0) {
    setTimeout(() => {
      hideNotification()
    }, props.time)
  }
})

onUnmounted(() => {
  clearTimeout(hideNotification)
})

function getContainerStyle(placement) {
  placement = positions.includes(props.placement) ? props.placement : "top";

  const style = getContainerClass(placement);

  return `${style}`;
}

</script>

<template>
  <div :class="getContainerStyle(placement)" v-if="visible">
    <div :class="titleClass">
      <p>{{ title }}</p>
      <button :class="closingButtonClass" @click="hideNotification">&times</button>
    </div>
    <div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>
  