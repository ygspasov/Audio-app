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
          <div class="block mt-1 text-lg leading-tight font-medium text-black">
            Genre: {{ $route.params.genre }}
          </div>
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
            v-model="comment"
            id="comment"
            rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            :disabled="v$.$invalid"
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 disabled:opacity-60"
            @click.prevent="addComment"
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
import { useVuelidate } from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";
import { auth, db, addDoc, collection } from "@/firebase/firebase";

export default {
  name: "SingleSong",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      comment: "",
    };
  },
  validations() {
    return {
      comment: {
        requiredIf: helpers.withMessage("Comment is required", (val) => {
          return val.length > 0;
        }),
        minLength: minLength(3),
      },
    };
  },
  methods: {
    async addComment() {
      const comment = {
        text: this.comment,
        datePosted: new Date().toString(),
        songId: this.$route.params.id,
        name: this.currentUser,
        uid: auth.currentUser.uid,
      };
      this.comment = "";
      console.log("comment", comment);
      const docRef = await addDoc(collection(db, "comments"), comment);
      console.log("Document written with ID: ", docRef.id);
    },
  },
  computed: {
    currentUser() {
      return auth.currentUser.email.match(/^([^@]*)@/)[1];
    },
  },
};
</script>
<style></style>
