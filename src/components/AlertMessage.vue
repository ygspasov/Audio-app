<template>
  <div
    id="alert-border-3"
    class="mx-auto max-w-prose flex items-center justify-center p-4 mb-4 border-t-4"
    :class="alertColor"
    role="alert"
  >
    <svg
      class="flex-shrink-0 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <div class="ml-3 text-sm font-medium">{{ alertText }}</div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { alertStore } from "@/stores/alertStore";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(alertStore, ["alertText", "alertColor"]),
  },
};
</script>
<style></style>
