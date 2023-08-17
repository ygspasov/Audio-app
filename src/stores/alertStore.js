import { defineStore } from "pinia";

export const alertStore = defineStore("alert", {
  state: () => ({
    showAlert: false,
    alertText: "",
    alertColor: "",
  }),
  actions: {
    setAlert(text, color) {
      this.showAlert = !this.showAlert;
      this.alertText = text;
      this.alertColor = color;
      setTimeout(() => {
        this.showAlert = !this.showAlert;
      }, 2000);
    },
  },
});
