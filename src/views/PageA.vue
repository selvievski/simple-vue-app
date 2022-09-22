<template>
  <main>
    <button @click="toggle" class="button" :class="{ active: gallery.show }">Toggle</button>
    <Gallery v-if="gallery.show"></Gallery>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useGalleryStore } from '@/stores/gallery'
import Gallery from "../components/gallery/Gallery.vue";

export default defineComponent({
  name: "PageA",
  components: {
    Gallery
  },
  setup() {
    const gallery = useGalleryStore()

    function toggle() {
      gallery.toggle();
    }

    return {
      gallery,
      toggle
    }
  }
});
</script>
<style scoped>
.button {
  transition-duration: 0.4s;
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
.active {
  background-color: #4CAF50; /* Green */
  color: white;
}
</style>