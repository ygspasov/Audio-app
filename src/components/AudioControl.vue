<template>
  <div class="centered w-full md:w-3/4">
    <div class="flex items-center justify-center mx-auto mb-1">
      <!-- <button
        data-tooltip-target="tooltip-shuffle"
        type="button"
        class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3"
          />
        </svg>
        <span class="sr-only">Shuffle audio</span>
      </button>
      <div
        id="tooltip-shuffle"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Shuffle audio
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        data-tooltip-target="tooltip-previous"
        type="button"
        class="p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 12 16"
        >
          <path
            d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z"
          />
        </svg>
        <span class="sr-only">Previous audio</span>
      </button> -->
      <div
        id="tooltip-previous"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Previous audio
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        @click.prevent="playSong"
        data-tooltip-target="tooltip-pause"
        type="button"
        class="inline-flex items-center justify-center p-2.5 mx-2"
      >
        <i
          class="fa-regular fa-lg"
          :class="{ 'fa-circle-play': !playing, 'fa-circle-pause': playing }"
        ></i>
        <span class="sr-only">Pause audio</span>
      </button>
      <div
        id="tooltip-pause"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Pause audio
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <!-- <button
        data-tooltip-target="tooltip-next"
        type="button"
        class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 12 16"
        >
          <path
            d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"
          />
        </svg>
        <span class="sr-only">Next audio</span>
      </button> -->
      <!-- <div
        id="tooltip-next"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Next audio
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div> -->
      <!-- <button
        data-tooltip-target="tooltip-restart"
        type="button"
        class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
          />
        </svg>
        <span class="sr-only">Restart audio</span>
      </button> -->
      <!-- <div
        id="tooltip-restart"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Restart audio
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div> -->
    </div>
    <div class="flex items-center justify-between space-x-2 mx-10">
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ seek }}</span>
      <div
        @click.prevent="updateSeek"
        class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-800"
      >
        <div class="bg-blue-600 h-1.5 rounded-full" :style="{ width: playerProgress }"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ duration }}</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { playerStore } from "@/stores/playerStore";

export default {
  methods: {
    ...mapActions(playerStore, ["updateSeek"]),
    playSong() {
      this.$emit("playSong");
    },
  },
  computed: {
    ...mapState(playerStore, ["playing", "duration", "seek", "playerProgress"]),
  },
};
</script>
<style scoped>
.centered {
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  transform: translate(-50%, 0);
}
</style>
