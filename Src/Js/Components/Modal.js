import HideModal from "../Functions/Modal/HideModal.js";
import Card from "../Functions/Card.js";

export default {
  props: {
    list: { type: Array },
  },
  data() {
    return {
      content: "",
    };
  },
  template: `
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="input" class="form-label">conteúdo</label>
                    <input ref="input" v-model="content" class="form-control form-control-dark" @keyup.enter="add" id="input" type="text">
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    `,
  methods: Card.methods,
  components: {
    Card,
    HideModal,
  },
};
