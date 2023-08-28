<template>
  <div>
    <!-- Sign in form -->
    <p v-if="isLoginValid"></p>
    <p v-if="isRegistrationValid"></p>
    <form v-if="loginOrRegister">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          v-model="l_email"
          id="email"
          @blur="v$.l_email.$touch"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
        />
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-for="error of v$.l_email.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your password</label
        >
        <input
          type="password"
          v-model="l_password"
          id="password"
          @blur="v$.l_password.$touch"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-for="error of v$.l_password.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <!-- <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div> -->
    </form>
    <!-- Registration form -->

    <form v-if="!loginOrRegister">
      <div class="relative z-0 w-full mb-6 group">
        <input
          v-model="r_email"
          @blur="v$.r_email.$touch"
          type="email"
          name="floating_email"
          id="floating_email"
          class="block my-10 py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Email"
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
        >
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-for="error of v$.r_email.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          v-model="r_password"
          @blur="v$.r_password.$touch"
          type="password"
          name="floating_password"
          id="floating_password"
          class="block my-10 py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password</label
        >
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-for="error of v$.r_password.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          v-model="r_confirm"
          @blur="v$.r_confirm.$touch"
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirm password</label
        >
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-for="error of v$.r_confirm.$errors"
          :key="error.$uid"
        >
          <strong>{{ error.$message }}</strong>
        </p>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="r_firstName"
            @blur="v$.r_firstName.$touch"
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="mt-2 block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >First name</label
          >
          <p
            class="mt-2 text-sm text-red-600 dark:text-red-500"
            v-for="error of v$.r_firstName.$errors"
            :key="error.$uid"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="r_lastName"
            @blur="v$.r_lastName.$touch"
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            class="mt-2 block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Last name</label
          >
          <p
            class="mt-2 text-sm text-red-600 dark:text-red-500"
            v-for="error of v$.r_lastName.$errors"
            :key="error.$uid"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="r_phone"
            @blur="v$.r_phone.$touch"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            class="mt-2 block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Phone number (123-456-7890)</label
          >
          <p
            class="mt-2 text-sm text-red-600 dark:text-red-500"
            v-for="error of v$.r_phone.$errors"
            :key="error.$uid"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="r_address"
            @blur="v$.r_address.$touch"
            type="text"
            name="floating_address"
            id="floating_address"
            class="mt-2 block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Address</label
          >
          <p
            class="mt-2 text-sm text-red-600 dark:text-red-500"
            v-for="error of v$.r_address.$errors"
            :key="error.$uid"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
      </div>
      <!-- <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button> -->
    </form>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  alpha,
  numeric,
  sameAs,
  email,
  minLength,
  maxLength,
} from "@vuelidate/validators";

export default {
  props: ["loginOrRegister"],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      l_email: "",
      l_password: "",
      r_email: "",
      r_password: "",
      r_confirm: "",
      r_firstName: "",
      r_lastName: "",
      r_phone: "",
      r_address: "",
    };
  },
  validations() {
    // l_ for the login form
    // r_ for the registration form
    return {
      l_email: {
        requiredIf: helpers.withMessage("Email is required", (val) => {
          return val.length > 0;
        }),
        email,
      },
      l_password: {
        requiredIf: helpers.withMessage("Password is required", (val) => {
          return val.length > 0;
        }),
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      r_firstName: {
        requiredIf: helpers.withMessage("First name is required", (val) => {
          return val.length > 0;
        }),
        alpha,
        minLength: minLength(3),
      },
      r_lastName: {
        requiredIf: helpers.withMessage("Last name is required", (val) => {
          return val.length > 0;
        }),
        alpha,
        minLength: minLength(3),
      },
      r_email: {
        requiredIf: helpers.withMessage("Email is required", (val) => {
          return val.length > 0;
        }),
        email,
      },
      r_password: {
        requiredIf: helpers.withMessage("Password is required", (val) => {
          return val.length > 0;
        }),
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      r_confirm: {
        // requiredIf: helpers.withMessage("Password is required", (val) => {
        //   return val.length > 0;
        // }),
        sameAsPassword: sameAs(this.r_password),
      },
      r_phone: {
        requiredIf: helpers.withMessage("Phone is required", (val) => {
          return val.length > 0;
        }),
        numeric,
        minLength: minLength(8),
        maxLength: maxLength(12),
      },
      r_address: {
        requiredIf: helpers.withMessage("Address is required", (val) => {
          return val.length > 0;
        }),
        minLength: minLength(10),
      },
    };
  },

  computed: {
    isLoginValid() {
      if (!this.v$.l_email.$invalid && !this.v$.l_password.$invalid) {
        this.$emit("l_valid", true);
        const login = {
          email: this.l_email,
          password: this.l_password,
        };
        this.$emit("login", login);
      } else {
        this.$emit("l_valid", false);
      }
      return !this.v$.l_email.$invalid && !this.v$.l_password.$invalid;
    },
    isRegistrationValid() {
      if (
        !this.v$.r_email.$invalid &&
        !this.v$.r_password.$invalid &&
        !this.v$.r_confirm.$invalid &&
        !this.v$.r_firstName.$invalid &&
        !this.v$.r_lastName.$invalid &&
        !this.v$.r_phone.$invalid &&
        !this.v$.r_address.$invalid
      ) {
        this.$emit("r_valid", true);
        const registration = {
          email: this.r_email,
          password: this.r_password,
          confirm: this.r_confirm,
          firstName: this.r_firstName,
          lastName: this.r_lastName,
          phone: this.r_phone,
          address: this.r_address,
        };
        this.$emit("registration", registration);
      } else {
        this.$emit("r_valid", false);
      }
      return (
        !this.v$.r_email.$invalid &&
        !this.v$.r_password.$invalid &&
        !this.v$.r_confirm.$invalid &&
        !this.v$.r_firstName.$invalid &&
        !this.v$.r_lastName.$invalid &&
        !this.v$.r_phone.$invalid &&
        !this.v$.r_address.$invalid
      );
    },
  },
  watch: {},
  methods: {},
  created() {
    this.l_email = "";
    this.l_password = "";
    this.r_email = "";
    this.r_password = "";
  },
};
</script>
<style></style>
