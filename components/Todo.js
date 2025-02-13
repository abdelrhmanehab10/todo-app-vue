app.component("todo", {
  props: {
    todo: {
      type: String,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <li class="flex gap-x-3">
        <div class="flex h-6 items-center">
        <input
            id="candidates"
            name="candidates"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        </div>
        <div class="text-sm leading-6">
            <label for="candidates" class="font-medium text-gray-900">{{ todo }}</label>
        </div>
    </li>
    `,
});
