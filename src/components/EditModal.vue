<template>
  <a data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="mx-1"
    ><i class="fa-solid fa-pen-to-square"></i
  ></a>

  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <EditForm @close-modal="closeModal" />
      </div>
    </div>
  </div>
</template>
<script>
import { Modal, initFlowbite } from "flowbite";
import EditForm from "./EditForm.vue";

export default {
  components: { EditForm },
  methods: {
    closeModal() {
      const $targetEl = document.getElementById("popup-modal");
      const modal = new Modal($targetEl);
      modal.hide();
    },
  },
  created() {
    initFlowbite();
  },
};
</script>
<style></style>
