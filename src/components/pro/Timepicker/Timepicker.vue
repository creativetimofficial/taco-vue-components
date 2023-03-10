<script setup>
import { getContainerClass, getInputClass } from "./timepicker.js";
import { ref, onMounted } from "vue";
import { makeid } from "../../../utils/generateID.js";

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const selectedHour = ref("12");
const selectedMinute = ref("00");
const selectedAmPm = ref("pm");
const showTimepicker = ref(false);

function convertTime12to24(time12h) {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
}

function close() {
  showTimepicker.value = false;
  update();
}

function changeAmPm() {
  selectedAmPm.value = selectedAmPm.value == "am" ? "pm" : "am";
  update();
}

function update() {
  if (
    (selectedMinute.value < 10) &
    (selectedMinute.value.toString().length < 2)
  ) {
    selectedMinute.value = "0" + selectedMinute.value;
  }
  if ((selectedHour.value < 10) & (selectedHour.value.toString().length > 1)) {
    selectedHour.value = selectedHour.value % 10;
  }
  if (selectedHour.value == 0) {
    selectedHour.value = "00";
  }
  if (selectedHour.value > 12) {
    selectedHour.value = 12;
  }
  if (selectedHour.value < 0) {
    selectedHour.value = "00";
  }
  if (selectedMinute.value > 59) {
    selectedMinute.value = 59;
  }
  if (selectedMinute.value < 0) {
    selectedMinute.value = "00";
  }
  const time12h =
    selectedHour.value + ":" + selectedMinute.value + " " + selectedAmPm.value;
  const updatedTimer = convertTime12to24(time12h);
  emit("update:modelValue", updatedTimer);
}

onMounted(() => {
  const temp = props.modelValue.split(":");
  if (temp[0] < 24 && temp[0] >= 0 && temp[1] < 60 && temp[1] >= 0) {
    if (temp[0] > 12) {
      selectedHour.value = temp[0] - 12;
      selectedAmPm.value = "pm";
    } else {
      selectedHour.value = temp[0];
      selectedAmPm.value = "am";
    }
    selectedMinute.value = temp[1];
  }
  update();
});
</script>

<template>
  <div>
    <div class="w-fit" v-click-outside="close">
      <input
        :id="makeid(7)"
        :class="getInputClass()"
        :value="modelValue"
        readonly
        @click="showTimepicker = !showTimepicker"
      />
      <div v-if="showTimepicker" :class="getContainerClass().one">
        <div :class="getContainerClass().two">
          <input
            type="number"
            min="1"
            max="12"
            step="1"
            class="text-center ml-3"
            v-model="selectedHour"
            @click="update()"
          />
          <span :class="getContainerClass().divider">:</span>
          <input
            type="number"
            min="0"
            max="59"
            step="5"
            class="text-center"
            v-model="selectedMinute"
            @click="update()"
          />

          <div @click="changeAmPm()" :class="getContainerClass().three">
            {{ selectedAmPm }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
