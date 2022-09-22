<template>
  <div>
    <img v-for="n in 10" :key="n" src="https://placeimg.com/150/150/people" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gallery"
});
</script>
<style scoped>
img {
  margin: 10px;
}
</style>