<script setup>
import { getButtonStyling, inputClass, spanClass, containerClass } from "./counter.js";
import { variantStyle } from "@/utils/colors.js";
import { makeid } from "../../../utils/generateID.js";


const props = defineProps({
    modelValue: {
        type: Number
    },
    color: {
        type: String,
        default: "blue",
    },
});

const uuid=makeid(7);

const emit = defineEmits(["update:modelValue"]);

function getButtonClass(color) {
    color = variantStyle.filled.hasOwnProperty(color) ? props.color : "blue";

    const style = getButtonStyling(color);

    return `${style}`
}

function counterUp(){
    emit('update:modelValue', parseInt(props.modelValue)+1)
}

function counterDown(){
    emit('update:modelValue', parseInt(props.modelValue)-1)
}

</script>


<template>
    <div id="counter" :class="containerClass">
        <button :class="getButtonClass(color)" @click="counterDown">
            <span :class="spanClass"><strong> − </strong></span>
        </button>
        <input :class="inputClass" type="number" :id="uuid" :value="modelValue" readonly>
        <button :class="getButtonClass(color)" @click="counterUp">
            <span :class="spanClass"> <strong> + </strong></span>
        </button>
    </div>
</template>