<script setup>
import { getClasses } from "./datepicker.js";
import { ref, onMounted } from "vue";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MONTH_SHORT_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const props = defineProps({
  modelValue: {
    type: String,
  },
  dateFormat: {
    type: String,
  },
});

defineExpose({
  updateFormat,
});

const emit = defineEmits(["update:modelValue"]);
const showDatepicker = ref(false);
const month = ref("");
const year = ref("");
const currentDay = ref("");
const no_of_days = ref([]);
const blankdays = ref([]);

function updateFormat() {
  let updatedDate = new Date(year.value, month.value, currentDay.value);
  emit("update:modelValue", formatDateForDisplay(updatedDate));
}

function initDate() {
  let today;

  if (props.modelValue) {
    today = new Date(Date.parse(props.modelValue));
  } else {
    today = new Date();
  }

  month.value = today.getMonth();
  year.value = today.getFullYear();
  currentDay.value = today.getDate();
  emit("update:modelValue", formatDateForDisplay(today));
}

function formatDateForDisplay(date) {
  let formattedDay = DAYS[date.getDay()];
  let formattedDate = ("0" + date.getDate()).slice(-2);
  let formattedMonth = MONTH_NAMES[date.getMonth()];
  let formattedMonthShortName = MONTH_SHORT_NAMES[date.getMonth()];
  let formattedMonthInNumber = ("0" + (parseInt(date.getMonth()) + 1)).slice(
    -2
  );
  let formattedYear = date.getFullYear();

  if (props.dateFormat === "DD-MM-YYYY") {
    return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`;
  }

  if (props.dateFormat === "YYYY-MM-DD") {
    return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`;
  }

  if (props.dateFormat === "D d M, Y") {
    return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`;
  }

  return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
}

function isSelectedDate(date) {
  const d = new Date(year.value, month.value, date);

  return props.modelValue === formatDateForDisplay(d) ? true : false;
}

function isToday(date) {
  const today = new Date();
  const d = new Date(year.value, month.value, date);

  return today.toDateString() === d.toDateString() ? true : false;
}

function getDateValue(dayNumber) {
  currentDay.value = dayNumber;
  let selectedDate = new Date(year.value, month.value, dayNumber);
  emit("update:modelValue", formatDateForDisplay(selectedDate));
  showDatepicker.value = false;
}

function getNoOfDays() {
  let daysInMonth = new Date(year.value, month.value + 1, 0).getDate();
  let dayOfWeek = new Date(year.value, month.value).getDay();
  let blankdaysArray = [];

  for (let i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  let daysArray = [];

  for (let j = 1; j <= daysInMonth; j++) {
    daysArray.push(j);
  }

  blankdays.value = blankdaysArray;
  no_of_days.value = daysArray;
}

onMounted(() => {
  initDate();
  getNoOfDays();
});
</script>

<template>
  <div v-click-outside="() => (showDatepicker = false)" id="Datepicker">
    <label for="datepicker" :class="getClasses().label">Select Date</label>
    <div class="relative">
      <input
        type="text"
        :value="modelValue"
        @click="showDatepicker = !showDatepicker"
        @keydown.esc="showDatepicker = false"
        @keydown.tab="showDatepicker === true ? $event.preventDefault() : ''"
        :class="getClasses().input"
        placeholder="Select date"
        readonly
      />
      <div :class="getClasses().calendarIconDiv">
        <svg
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div v-if="showDatepicker" :class="getClasses().datepickerDiv">
        <div :class="getClasses().datepickerHeaderDiv">
          <button
            type="button"
            :class="getClasses().buttonLtGt"
            @click="
              if (month == 0) {
                year--;
                month = 11;
              } else {
                month--;
              }
              getNoOfDays();
            "
          >
            <svg
              class="h-6 w-6 text-gray-400 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <span class="text-xl font-light text-gray-800">{{
              MONTH_NAMES[month]
            }}</span>
            <span class="ml-1 text-lg text-gray-600 font-normal">{{
              year
            }}</span>
          </div>
          <button
            type="button"
            :class="getClasses().buttonLtGt"
            @click="
              if (month == 11) {
                month = 0;
                year++;
              } else {
                month++;
              }
              getNoOfDays();
            "
          >
            <svg
              class="h-6 w-6 text-gray-400 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div :class="getClasses().dayNamesDiv">
          <div v-for="(day, index) in DAYS" :key="index" style="width: 14.285%">
            <div class="text-gray-500 font-medium text-center text-xs">
              {{ day }}
            </div>
          </div>
        </div>

        <div :class="getClasses().daysDiv">
          <div
            v-for="(blankday, index2) in blankdays"
            :key="index2"
            style="width: 14.285%"
            class="text-center text-sm"
          ></div>
          <div
            v-for="(dayNumber, dayNumberIndex) in no_of_days"
            :key="dayNumberIndex.toString() + month + year"
            style="width: 14.285%; line-height: 2.285rem"
            @click="getDateValue(dayNumber)"
            :class="
              isSelectedDate(dayNumber)
                ? getClasses().dayButton1
                : isToday(dayNumber)
                ? getClasses().dayButton2
                : getClasses().dayButton3
            "
          >
            {{ dayNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
