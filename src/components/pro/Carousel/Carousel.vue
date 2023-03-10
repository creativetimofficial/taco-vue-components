<script setup>
import { ref } from 'vue';
import { getContainerStyling, imageContainerClass, imageClass, getButtonStyling, beltContainerClass, getBeltButtonStyling } from './carousel.js';
import { variantStyle } from "@/utils/colors.js";

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
    color: {
        type: String,
        default: "gray",
    },
    colorActive: {
        type: String,
        default: "blue",
    },
    size: {
        type: String,
        default: "md",
    },
});

const sizeOptions = ["sm", "md", "lg"];
var currentImageIndex = ref(0);

function previousImage() {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
}

function nextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
}

function changeImage(index) {
    currentImageIndex.value = index;
}

function getContainerClasses(size) {
    size = sizeOptions.includes(props.size) ? props.size : "md";
    const style = getContainerStyling(size);

    return `${style}`
}

function getButtonClasses(position, size) {
    size = sizeOptions.includes(props.size) ? props.size : "md";

    const style = getButtonStyling(position, size);
    return `${style}`
}


function getBeltButtonClasses(index, color, colorActive) {

    const active = index === currentImageIndex.value ? "true" : "false";
    color = variantStyle.filled.hasOwnProperty(props.color)
        ? props.color
        : "gray";
    colorActive = variantStyle.filled.hasOwnProperty(props.colorActive)
        ? props.colorActive
        : "blue";

    const style = getBeltButtonStyling(active, color, colorActive);
    return `${style}`
}
</script>

<template>
    <div :class="getContainerClasses(size)">
        <div :class="imageContainerClass">
            <img :src="images[currentImageIndex]" alt="carousel image" :class="imageClass">
            <button @click="previousImage" :class="getButtonClasses('left', size)">←</button>
            <button @click="nextImage" :class="getButtonClasses('right', size)">→</button>
        </div>
        <div :class="beltContainerClass">
            <button v-for="(image, index) in images" :key="index" :class="getBeltButtonClasses(index, color, colorActive)"
                @click="changeImage(index)">
            </button>
        </div>
    </div>
</template>