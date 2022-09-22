import { ref } from "vue";
import { defineStore } from "pinia";
import type { Element } from "../stores/types"

export const useElementsStore = defineStore("elements", () => {
  const data = ref([] as Array<Element>);
  function add(value: Element) {
    data.value.push(value);
  }

  return { data, add };
});
