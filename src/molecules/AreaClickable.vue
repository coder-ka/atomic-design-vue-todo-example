<template>
  <div
    class="border border-dashed border-grey-dark py-4 text-center bg-grey-lighter hover:bg-grey-lightest rounded cursor-pointer bgcolor-transition"
    @click="$emit('click', $event)"
  >
    <x-text class="font-sans text-grey-darker tracking-wide" :text="label"></x-text>
  </div>
</template>

<script>
import Text from "../atoms/Text";

export default {
  components: {
    XText: Text
  },
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.bgcolor-transition {
  transition: background-color 0.15s ease 0s;
}
</style>
