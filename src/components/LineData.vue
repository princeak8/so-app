<template>
    <div class="line-data mw" :class="textColor">{{text}}</div>
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
  computed: {
    textColor() {
      if(this.text.includes('loading')) {
        return "nonActiveText"
      }
      return "activeText"
    }
  }
};
</script>
