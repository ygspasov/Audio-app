<template>
  <div class="max-w-6xl mx-auto">
    <div class="w-full mx-auto mb-4 bg-white rounded-xl overflow-hidden">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-80"
            src="@/assets/streaming.webp"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-md text-indigo-600 font-semibold">
            Song: {{ $route.params.songTitle }}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Genre: {{ $route.params.genre }}</a
          >
          <!-- <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some
            sunshine? We have a list of places to do just that.
          </p> -->
        </div>
      </div>
    </div>
    <form class="my-4">
      <div
        class="divide-y divide-solid w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="w-full bg-white p-4 flex align-center justify-between">
          <span>Comments 15</span><span><i class="fa-regular fa-comment mr-2"></i></span>
        </div>
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>

    <dl
      class="max-w-6xl text-gray-600 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
    >
      <div class="flex flex-col pb-3">
        <dt class="mb-1 text-black-800 text-lg md:text-lg dark:text-gray-400 font-semibold">
          Yavor Spasov
        </dt>
        <dd class="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quaerat. Sit
          incidunt sapiente facilis vero.
        </dd>
      </div>
      <div class="flex flex-col py-3">
        <dt class="mb-1 text-gray-800 md:text-lg dark:text-gray-400 font-semibold">Yavor Spasov</dt>
        <dd class="text-lg text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nostrum odit reprehenderit
          enim nam pariatur modi aperiam dolore.
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  name: "SingleSong",
};
</script>
<style></style>
