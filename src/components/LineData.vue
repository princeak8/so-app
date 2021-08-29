<template>
    <div class="line-data mw">{{text}}</div>
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
