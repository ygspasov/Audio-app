<template>
  <div
    class="basis-1/2 mx-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">My Songs</h5>
    <!-- <ul
      class="max-w-md space-y-1 text-gray-500 list-inside list-none dark:text-gray-400 divide-y divide-gray-200"
    >
      <li class="my-2">
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
            <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
    </ul> -->

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Song name</th>
            <th scope="col" class="px-6 py-3">Artist</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Aces High
            </th>
            <td class="px-6 py-4">Iron Maiden</td>
            <td class="flex items-center md:items-start justify-center md:justify-around px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              ><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Seventh son of the seventh son
            </th>
            <td class="px-6 py-4">Iron Maiden</td>
            <td class="flex items-center md:items-start justify-center md:justify-around px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
