<template>
    <div class="line-data mw" :class="textColor" style="display: flex; flex-direction: row">
        <span :class="textColor" style="margin: 0; padding:0">{{text}}</span>
        <span :class="unitStyle" style="margin: 0; padding:0">{{unit}}</span>
    </div>
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
    unit: {
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
    },
    unitStyle() {
      if(this.text.includes('loading')) {
        return "nonActiveUnit"
      }
      return "activeUnit"
    }
  }
};
</script>
