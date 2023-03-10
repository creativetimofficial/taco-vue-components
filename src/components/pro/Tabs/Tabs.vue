<script setup>
import {
  getListClass,
  getContainerClass,
  getOptionClass,
  getAnimationRectangleClass,
} from "./tabs.js";
import { ref, onMounted } from "vue";
import { makeid } from "../../../utils/generateID.js";

const props = defineProps({
  tabsData: {
    type: Array,
  },
  icons: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: String,
  },
});

const activeTab = ref(props.tabsData[0]?.label);
const translate = ref(0);
const width = ref(0);
const divs = ref([]);
function setActiveTab(string, index) {
  width.value = divs.value[index].clientWidth;
  translate.value = 0;
  for (let i = 0; i < index; i++) {
    translate.value += divs.value[i].clientWidth;
  }
  activeTab.value = string;
}

onMounted(() => {
  if (props.selected) {
    let ind = props.tabsData.findIndex((data) => {
      return data.label === props.selected;
    });
    setActiveTab(props.tabsData[ind].label, ind);
  } else {
    setActiveTab(props.tabsData[0].label, 0);
  }
});
</script>

<template>
  <div :class="getContainerClass().one">
    <div :class="getContainerClass().two">
      <ul :class="getListClass().headers" data-tabs="tabs" role="list">
        <li
          v-for="(option, index) in tabsData"
          :key="index"
          :id="makeid(7)"
          :ref="
            (el) => {
              divs[index] = el;
            }
          "
          :class="getOptionClass().li"
          @click="setActiveTab(option.label, index)"
        >
          <a
            :class="getOptionClass().a"
            :active="activeTab === option.label ? true : false"
            role="tab"
          >
            <i v-if="icons" :class="option.icon"></i>&nbsp;{{ option.label }}
          </a>
        </li>
        <div
          :class="getAnimationRectangleClass().div"
          :style="`
            padding: 0px;
            width: ${width}px;
            transform: translate3d(${translate}px, 0px, 0px);
            transition: all 0.5s ease 0s;`"
        >
          <a :class="getAnimationRectangleClass().a" role="tab">-</a>
        </div>
      </ul>
      <div class="p-5">
        <Transition
          v-for="(option, index) in tabsData"
          :key="index"
          :enter-from-class="'opacity-0'"
          :leave-to-class="'opacity-0'"
          :enter-active-class="'transition duration-300'"
          :leave-active-class="'transition duration-300'"
        >
          <div
            v-if="activeTab === option.label"
            class="absolute z-[99]"
            :id="makeid(7)"
            role="tabpanel"
          >
            <p :class="getOptionClass().para">{{ option.desc }}</p>
          </div>
        </Transition>

        <div
          v-for="(option, index) in tabsData"
          :key="index"
          :class="activeTab === option.label ? '' : 'hidden'"
          class="opacity-0 z-[0]"
          :id="makeid(7)"
          role="spacing"
        >
          <p :class="getOptionClass().para">{{ option.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
