<template>
  <!-- Upload -->
  <div id="manageSongs" class="max-w-screen-2lg mx-auto">
    <div
      class="h-screen flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center"
    >
      <div
        class="basis-1/4 mb-4 md:mb-0 mx-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Upload</h5>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div class="my-1 text-base font-medium text-blue-700 dark:text-blue-500">
          Gamma Ray - Pale Rider
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
        </div>
      </div>
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
export default {};
</script>
<style></style>
