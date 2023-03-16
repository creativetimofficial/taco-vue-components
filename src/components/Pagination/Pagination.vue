<script setup>
import { variantStyle } from "../../utils/colors.js";
import {
  prevNextElement,
  getPaginationClass,
  itemPagination,
} from "./pagination.js";
import { ref, computed } from "vue";

const props = defineProps({
  pageCount: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "green",
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(["click"]);

const defaultPagesToDisplay = ref(5);

const totalPages = computed(() => {
  if (props.pageCount > 0) return props.pageCount;
  if (props.total > 0) {
    return Math.ceil(props.total / props.perPage);
  }
  return 1;
});

const pagesToDisplay = computed(() => {
  if (totalPages.value > 0 && totalPages.value < defaultPagesToDisplay.value) {
    return totalPages.value;
  }
  return defaultPagesToDisplay.value;
});

const minPage = computed(() => {
  if (props.currentPage >= pagesToDisplay.value) {
    const pagesToAdd = Math.floor(pagesToDisplay.value / 2);
    const newMaxPage = pagesToAdd + props.currentPage;
    if (newMaxPage > totalPages.value) {
      return totalPages.value - pagesToDisplay.value + 1;
    }
    return props.currentPage - pagesToAdd;
  } else {
    return 1;
  }
});

const maxPage = computed(() => {
  if (props.currentPage >= pagesToDisplay.value) {
    const pagesToAdd = Math.floor(pagesToDisplay.value / 2);
    const newMaxPage = pagesToAdd + props.currentPage;
    if (newMaxPage < totalPages.value) {
      return newMaxPage;
    } else {
      return totalPages.value;
    }
  } else {
    return pagesToDisplay.value;
  }
});

function range(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

function changePage(item) {
  emit("click", item);
}

function nextPage() {
  if (props.currentPage < totalPages.value) {
    emit("click", props.currentPage + 1);
  }
}

function prevPage() {
  if (props.currentPage > 1) {
    emit("click", props.currentPage - 1);
  }
}

function getClasses(color, size) {
  const validSizes = ["sm", "md", "lg"];
  color = variantStyle.filled.hasOwnProperty(color) ? props.color : "green";

  size = validSizes.includes(size) ? props.size : "md";

  const style = getPaginationClass(size, color);

  return style;
}
</script>

<template>
  <ul :id="id" class="flex list-none space-x-1">
    <li
      :class="[
        prevNextElement,
        getClasses(color, size).size,
        { 'cursor-pointer': currentPage !== 1 },
      ]"
      @click="prevPage"
    >
      <a aria-label="Previous">
        <span aria-hidden="true"
          ><i class="fa fa-angle-left" aria-hidden="true"></i
        ></span>
      </a>
    </li>
    <li
      v-for="item in range(minPage, maxPage)"
      :key="item"
      @click="changePage(item)"
      :disabled="currentPage === item"
      :class="[
        itemPagination,
        currentPage === item
          ? getClasses(color, size).color + ' pointer-events-none'
          : 'border border-solid border-gray-300 bg-white',
        getClasses(color, size).size,
        {
          'cursor-pointer': currentPage !== item,
        },
      ]"
    >
      <a :class="currentPage === item ? 'text-white' : 'text-gray-700'">{{
        item
      }}</a>
    </li>
    <li
      @click="nextPage"
      :class="[
        prevNextElement,
        getClasses(color, size).size,
        {
          'cursor-pointer': currentPage !== totalPages,
        },
      ]"
    >
      <a aria-label="Next">
        <span aria-hidden="true"
          ><i class="fa fa-angle-right" aria-hidden="true"></i
        ></span>
      </a>
    </li>
  </ul>
</template>
