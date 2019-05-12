<template>
  <div class="flex">
    <x-tag
      v-for="(label, index) in labels"
      :key="label"
      :class="{
        // first
        'rounded-tl-lg': labels[index - 1] === undefined,
        'rounded-bl-lg': labels[index - 1] === undefined,
        // last
        'rounded-tr-lg': labels[index + 1] === undefined,
        'rounded-br-lg': labels[index + 1] === undefined,
      }"
      style="margin-right: 1px"
      :active="label === selected"
      :label="label"
      @click="$emit('select', label)"
    ></x-tag>
  </div>
</template>

<script>
import Tag from "../atoms/Tag.vue";

export default {
  components: {
    XTag: Tag
  },
  model: {
    prop: "selected",
    event: "select"
  },
  props: {
    labels: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
