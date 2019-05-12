<template>
  <!-- normal text input -->
  <input
    v-if="type === 'text'"
    class="text-sm text-grey-darkest border-b appearance-none outline-none focus:border-grey-dark transition"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
  >

  <input
    v-else-if="type === 'date'"
    class="text-sm text-grey-darkest"
    type="datetime-local"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
  >
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: null
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.transition {
  transition: border-color 0.2s ease 0s;
}
</style>
