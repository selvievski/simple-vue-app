import { ref } from "vue";
import { defineStore } from "pinia";

export const useGalleryStore = defineStore("gallery", () => {
  const show = ref(true);
  function toggle() {
    show.value = !show.value;
  }

  return { show, toggle };
});
