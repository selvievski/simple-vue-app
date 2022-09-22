<template>
  <main>
    <ElementForm></ElementForm>
    <ElementsList></ElementsList>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ElementForm from "../components/elements/ElementForm.vue";
import ElementsList from "../components/elements/ElementsList.vue";

export default defineComponent({
  name: "PageB",
  components: {
    ElementForm,
    ElementsList
  }
});
</script>