<template>
  <button
    class="py-2 bg-grey rounded bgcolor-transition font-sans text-white text-sm font-bold tracking-wide"
    :class="{
      'bg-teal': primary,
      'hover:bg-teal-dark': primary,
      'bg-red-lighter': danger,
      'hover:bg-red-light': danger,
      }"
    style="min-width: 80px"
    @click="$emit('click', $event)"
  >{{label}}</button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    danger: {
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
.bgcolor-transition {
  transition: background-color 0.3s ease 0s;
}
</style>
