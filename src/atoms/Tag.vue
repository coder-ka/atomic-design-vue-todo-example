<template>
  <div
    class="tag bg-white shadow font-sans flex justify-center items-center cursor-pointer"
    :class="{
    'border': active,
    'border-indigo-dark': active,
  }"
    @click="$emit('click', $event)"
  >{{label}}</div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tag {
  width: 49px;
  height: 22px;
  font-size: 12px;
  color: #785e5e;
}
</style>
