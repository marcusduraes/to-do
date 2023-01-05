export default {
  methods: {
    hide() {
      $("#myModal").modal("hide");
      setTimeout(() => (document.querySelector("#input").value = ""), 500);
    },
  },
};
