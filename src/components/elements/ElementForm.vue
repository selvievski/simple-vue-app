<template>
  <div>
    <h2>Form for dynamically creating div elements</h2>
    <form @submit.prevent="addElement" class="form">
      <label for="width">Width:</label><br>
      <input type="text" id="width" name="width" v-model="element.width"><br>
      <label for="height">Height:</label><br>
      <input type="text" id="height" name="height" v-model="element.height"><br>
      <label for="backgroundColor">Background color:</label><br>
      <input type="text" id="backgroundColor" name="backgroundColor" v-model="element.backgroundColor"><br>
      <label for="borderRadius">Border radius:</label><br>
      <input type="text" id="borderRadius" name="borderRadius" v-model="element.borderRadius"><br>
      <input type="submit" value="Submit" class="button">
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useElementsStore } from "@/stores/elements";
import type { Element } from "../../stores/types"

export default defineComponent({
  name: "ElementForm",
  data() {
    return {
      element: {
        width: 0,
        height: 0,
        backgroundColor: "",
        borderRadius: ""
      } as Element
    }
  },
  setup() {
    const elements = useElementsStore()

    function addElement() {
      elements.add(this.element);
      this.element = {
        width: 0,
        height: 0,
        backgroundColor: "",
        borderRadius: ""
      } as Element;
    }

    return {
      elements,
      addElement
    }
  }
});
</script>
<style scoped>
h2{
  margin-top: 20px;
}
img {
  margin: 10px;
}
.form {
  padding: 10px;
  border: 1px solid green;
}
</style>