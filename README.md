# FlowMusic

FlowMusic is a music player app built with [Vue.js](https://vuejs.org/).

## Installation and running the project

```js
# for installing the dependencies
npm i
# for running the project
npm run dev
# for running the tests
npm run cypress
```

## Technologies Used

[VueJS](https://vuejs.org/) - the progressive JavaScript framework

[Vue Router](https://router.vuejs.org/) - the official router for VueJS

[Vuelidate](https://vuelidate-next.netlify.app/) - a lightweight model-based validation for Vue.js

[Pinia](https://pinia.vuejs.org/) - the official store library for VueJS

[Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework

[Flowbite](https://flowbite.com/) - a set of design tokens and components based on the popular Tailwind CSS framework.

[Firebase](https://firebase.google.com/) - an app development and hosting platform

[Cypress](https://docs.cypress.io/) - an E2E testing framework for applications

[Howler](https://howlerjs.com/) - an audio library for the modern web.

![Home](./src/assets/images/readme/Home.jpg)

## Features

#Authentication

The authentication is provided by [Firebase](https://firebase.google.com/). Users can create accounts, register, log in and log out.

The Sign in and Registration forms are validated with [Vuelidate](https://vuelidate-next.netlify.app/). All fields show the appropriate errors when the user input doesn't meet the fields' validation criteria. The Register and Login buttons only become active when all fields have been validated.

![Register](./src/assets/images/readme/register.jpg)
![Login](./src/assets/images/readme/login.jpg)
