<template>
  <div class="p-6 text-center">
    <form class="mt-2">
      <div class="mb-6">
        <label
          for="songTitle"
          class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Song Title</label
        >
        <input
          type="songTitle"
          v-model="songTitle"
          @blur="v$.songTitle.$touch"
          id="songTitle"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Iron Maiden - Seventh son of the seventh son"
          required
        />
        <p
          class="mt-2 text-sm text-left text-red-600 dark:text-red-500"
          v-for="error of v$.songTitle.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <div class="mb-6">
        <label
          for="genre"
          class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Genre</label
        >
        <input
          type="genre"
          v-model="songGenre"
          @blur="v$.songGenre.$touch"
          id="genre"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Heavy metal"
          required
        />
      </div>
      <p
        class="mt-2 text-sm text-left text-red-600 dark:text-red-500"
        v-for="error of v$.songGenre.$errors"
        :key="error.$uid"
      >
        <strong>{{ error.$message }}</strong>
      </p>
      <div class="flex flex-col md:flex-row mt-2">
        <button
          type="submit"
          @click.prevent="closeModal"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
        <!-- <button
          class="my-2 md:my-0 ml-0 md:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Back
        </button> -->
      </div>
    </form>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      songTitle: "",
      songGenre: "",
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    closeModal() {
      console.log("closeModal");
      this.$emit("close-modal");
    },
  },
  validations() {
    return {
      songTitle: { required: helpers.withMessage("Song Title cannot be empty", required) },
      songGenre: { required: helpers.withMessage("Song Genre cannot be empty", required) },
    };
  },
  created() {
    console.log("v$ editForm", this.v$);
  },
};
</script>
<style></style>
