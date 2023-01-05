import Storage from "../Functions/Storage.js";

const { setStorage, getStorage } = Storage.methods.storage;

export default {
  props: {
    list: { type: Array },
  },
  template: `
        <div class="container-sm my-4">
            <h1>Todo list</h1>
            <ul class="list-group">
                <li v-for="item in list" :key="item" class="list-group-item d-flex justify-content-between">
                    <div :class="{'text-decoration-line-through text-muted fst-italic': item.completed}">
                        <input type="checkbox" @click="toggle" class="me-2" name="" :id="item.id - 1" :checked="item.completed">{{ item.content }}
                    </div>
                    <i class="bi bi-trash3 text-danger" @click="rmItem(item)"></i>
                </li>
            </ul>
        </div>`,
  methods: {
    setStorage,
    getStorage,

    toggle(event) {
      event.target.parentNode.classList.toggle("text-decoration-line-through");
      event.target.parentNode.classList.toggle("text-muted");
      event.target.parentNode.classList.toggle("fst-italic");

      this.list[event.target.id].completed =
        !this.list[event.target.id].completed;
  
      this.setStorage();
    },
    rmItem(element) {
      this.list.splice(this.list.indexOf(element), 1);
      this.setStorage();
    },
  },
};
