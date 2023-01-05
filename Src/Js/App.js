import AddButton from "./Components/AddButton.js";
import Modal from "./Components/Modal.js";
import Cards from "./Components/Cards.js";
import ShowModal from "./Functions/Modal/ShowModal.js";

import Storage from "./Functions/Storage.js";

const { showModal } = ShowModal.methods;
const { getStorage } = Storage.methods.storage;

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getStorage();
  },
  methods: {
    showModal,
    getStorage,
  },

  components: {
    "add-button": AddButton,
    "modal-app": Modal,
    "cards-app": Cards,
    ShowModal,
  },
};
