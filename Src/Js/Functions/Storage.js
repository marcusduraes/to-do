export default {
  methods: {
    storage: {
      setStorage() {
        localStorage.setItem("list", JSON.stringify(this.list));
      },
      getStorage() {
        if (localStorage.getItem("list")) {
            this.list = JSON.parse(localStorage.getItem("list"));
          }
      },
    },
  },
};
