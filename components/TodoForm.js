app.component("todo-form", {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <form class="space-y-6" @submit.prevent="onSubmit">
        <div>
          <input
            id="todo"
            name="todo"
            type="text"
            placeholder="Enter new todo with minmum 3 characters."
            class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            v-model="todo"
          />
          <p class="text-xs text-red-500 pl-1 pt-1">{{ errorMessage }}</p>
        </div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
    </form>
  `,
  data() {
    return {
      todo: "",
      errorMessage: "",
    };
  },
  methods: {
    onSubmit() {
      this.errorMessage = "";
      if (this.todo === "") {
        this.errorMessage = "Please enter todo with minmum 3 characters.";
        return;
      }
      this.todos.push(this.todo);
      this.todo = "";
    },
  },
});
