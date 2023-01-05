export default {
  methods: {
    showModal() {
      $(document).ready(function () {
        $("#myModal").modal("show");
        setTimeout(() => document.querySelector("#input").focus(), 500);
      });
    },
  },
};
