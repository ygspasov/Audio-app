<template>
  <div id="manageSongs" class="max-w-screen-2lg mx-auto">
    <div
      class="h-screen flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center"
    >
      <UploadFile />
      <!-- Songs -->

      <div
        class="basis-1/2 mx-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          My Songs
        </h5>
        <ul
          class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
          style="list-style-type: none"
        >
          <li>
            <h3 class="text-xl">Song Name</h3>
            <form class="mt-2">
              <div class="mb-6">
                <label
                  for="songName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Song Title</label
                >
                <input
                  type="songName"
                  id="songName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Iron Maiden - Seventh son of the seventh son"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="genre"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Genre</label
                >
                <input
                  type="genre"
                  id="genre"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Heavy metal"
                  required
                />
              </div>
              <div class="flex flex-col md:flex-row">
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  class="my-2 md:my-0 ml-0 md:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Go Back
                </button>
              </div>
            </form>
          </li>
          <li><h3 class="text-xl">Song Name</h3></li>
          <li><h3 class="text-xl">Song Name</h3></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { authStore } from "@/stores/authStore";
import UploadFile from "./UploadFile.vue";
export default {
  name: "ManageSongs",
  components: {
    UploadFile,
  },
  beforeRouteEnter(to, from, next) {
    const auth = authStore();
    if (auth.userLoggedIn) {
      next();
    } else {
      next("/");
    }
  },
};
</script>
<style></style>
