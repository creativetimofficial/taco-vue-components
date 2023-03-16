<script setup>
import { ref, watch } from 'vue';
import { getContainerClass, headerClass, badgesContainer, getBadgeClass, getDropdownClass, dropdownContainer, getItemClass } from './multiselect.js';
import { variantStyle } from "../../utils/colors.js";

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    selected: {
        type: Array,
        required: true,
    },
    placeholder: {
        type: String,
        default: "Select Items"
    },
    size: {
        type: String,
        default: "md"
    },
    color: {
        type: String,
        default: "green"
    },
    multiple: {
        type: Boolean,
        default: false
    },
    animation: {
        type: Boolean,
        default: false,
    },
});

const sizes = ["sm", "md"];
const dropdownOpen = ref(false);
const selectedItems = ref(props.selected)

watch(() => props.multiple, (currentMultiple, prevMultiple) => {
    if (currentMultiple === false && prevMultiple == true) {
        selectedItems.value.splice(1)
    }
});

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
}

function selectItem(item) {
    const index = selectedItems.value.indexOf(item);

    if (props.multiple && index === -1) {
        selectedItems.value.push(item)
    } else if (!props.multiple && index === -1) {
        selectedItems.value[0] = item;
        toggleDropdown()
    } else {
        selectedItems.value.splice(index, 1)
    }
}

function isSelected(item) {
    return selectedItems.value.includes(item)
}


function removeItem(item) {
    const index = selectedItems.value.indexOf(item);
    if (index !== -1) {
        selectedItems.value.splice(index, 1);
    }
}

function getContainerStyle(size) {

    size = sizes.includes(size) ? props.size : "md";
    const style = getContainerClass(size)

    return `${style}`
}

function getBadgeStyle(color) {

    color = variantStyle.filled.hasOwnProperty(color) ? props.color : "green";
    const style = getBadgeClass(color)

    return `${style}`
}

function clickOutsideSelect() {
  if(dropdownOpen.value){
    toggleDropdown()
  }
}
</script>

<template>
    <div :class="getContainerStyle(size)" v-click-outside="clickOutsideSelect">
        <div :class="headerClass" @click="toggleDropdown" >
            <div v-if="selectedItems.length === 0">{{ placeholder }}</div>
            <div v-else-if="multiple === false && selectedItems.length !== 0">{{ selectedItems[0] }}</div>
            <div v-else :class="badgesContainer">
                <span v-for="(item, index) in selectedItems" :key="index" :class="getBadgeStyle(color)">
                    {{ item }}
                    <button type="button" aria-label="Close" @click="removeItem(item)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </span>
            </div>
            <span :class="getDropdownClass(dropdownOpen)"><svg version="1.1" class="fill-current h-3 w-3"
                    viewBox="0 0 20 20">
                    <path
                        d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z">
                    </path>
                </svg>
            </span>
        </div>
        <Transition :enter-from-class="animation ? 'opacity-0 translate-y-6' : ''"
            :leave-to-class="animation ? 'opacity-0' : ''" :enter-active-class="animation ? 'transition duration-300' : ''"
            :leave-active-class="
                animation ? 'transition translate-y-6 duration-300' : ''
            ">
            <div :class="dropdownContainer" v-show="dropdownOpen">

                <div v-for="(item, index) in options" :key="index" :class="getItemClass(isSelected(item))"
                    @click="selectItem(item)">
                    {{ item }}
                </div>

            </div>
        </Transition>
    </div>
</template>
