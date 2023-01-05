import HideModal from "./Modal/HideModal.js";
import Storage from "./Storage.js";

const { hide } = HideModal.methods;
const { setStorage, getStorage } = Storage.methods.storage;

export default {
  methods: {
    setStorage,
    getStorage,
    hide,

    add() {
      this.hide();
      const inArray = (data) =>
        this.list.some((element) => element.content === data);

      inArray(this.content) != true
        ? this.list.push({
            id: this.list.length + 1,
            content: this.content,
            completed: false,
          }) && this.setStorage()
        : "";
    },
  },
};
