<template>
    <div class="unit-data mw">{{text}}</div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
