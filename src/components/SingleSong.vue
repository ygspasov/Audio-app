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
    <AlertMessage v-if="showAlert" />

    <form class="my-4" v-if="userLoggedIn()">
      <div
        class="divide-y divide-solid w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="w-full bg-white p-4 flex align-center justify-between">
          <span>Comments {{ comments.length }}</span
          ><span><i class="fa-regular fa-comment mr-2"></i></span>
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
      <div class="flex flex-col pb-3" v-for="comment in comments" :key="comment.id">
        <dt class="mb-1 text-black-800 text-lg md:text-lg dark:text-gray-400 font-semibold">
          {{ comment.name }}
        </dt>
        <dl>
          <dd class="text-md text-gray-600 mb-2 italic">
            {{ commentDate(comment.datePosted) }}
          </dd>
          <dd class="text-lg text-gray-600">
            {{ comment.text }}
          </dd>
        </dl>
      </div>
    </dl>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";
import { auth, db, addDoc, collection, getDocs, where, query } from "@/firebase/firebase";
import { mapState, mapActions } from "pinia";
import { authStore } from "@/stores/authStore";
import { alertStore } from "@/stores/alertStore";
import AlertMessage from "./AlertMessage.vue";

export default {
  name: "SingleSong",

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      comment: "",
      comments: [],
    };
  },
  components: {
    AlertMessage,
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
    ...mapState(authStore, ["userLoggedIn"]),

    ...mapActions(alertStore, ["setAlert"]),
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

      await addDoc(collection(db, "comments"), comment).then((res) => {
        this.setAlert("Comment added", "text-green-800 border-green-300 bg-green-50");
        console.log("Response ", res.id);
        this.getComments();
      });
    },
    async getComments() {
      const commentsRef = collection(db, "comments");
      let q = query(commentsRef, where("songId", "==", this.$route.params.id));
      this.comments = [];
      await getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((comment) => {
          this.comments.push(comment.data());
        });
        console.log("comments", this.comments);
      });
    },
    commentDate(val) {
      return new Date(val).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
      });
    },
  },
  computed: {
    ...mapState(alertStore, ["showAlert"]),
    currentUser() {
      return auth.currentUser.email.match(/^([^@]*)@/)[1];
    },
  },
  created() {
    this.getComments();
    console.log("this.$route.params.id", this.$route.params.id);
  },
};
</script>
<style></style>
