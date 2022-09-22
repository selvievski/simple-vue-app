<template>
  <h2>Result:</h2>
  <div class="div-container">
    <div v-for="element in elements.data"
         class="generated-div"
         :style="{
          'border': '1px solid',
          'width': element.width + 'px',
          'height': element.height + 'px',
          'background-color': element.backgroundColor,
          'border-radius': element.borderRadius + 'px'}">Generated DIV</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useElementsStore } from "@/stores/elements";

export default defineComponent({
  name: "ElementsList",
  setup() {
    const elements = useElementsStore()

    return {
      elements
    }
  }
});
</script>
<style scoped>
h2{
  margin-top: 20px;
}
.generated-div {
  margin: 10px;
}
.div-container {
  padding: 10px;
  border: 1px solid green;
  margin-bottom: 20px;
}
</style>