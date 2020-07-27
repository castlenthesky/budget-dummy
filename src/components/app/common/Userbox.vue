<template>
  <div>
    {{ userData }}
  </div>
</template>

<script lang="ts">
export default {
  props: ["userData"],
  data: () => ({
    something: true,
  }),
};
</script>

<style></style>
