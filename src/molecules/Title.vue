<template>
  <span>
    <x-input
      :placeholder="placeholder"
      v-if="editable"
      :value="title"
      @change="$emit('change', $event.target.value)"
    ></x-input>
    <x-text v-else class="font-bold text-lg" :text="title"></x-text>
    <x-text class="text-grey-darker text-sm" :text="anchorText"></x-text>
  </span>
</template>

<script>
import Input from "../atoms/Input.vue";
import Text from "../atoms/Text.vue";

export default {
  components: {
    XInput: Input,
    XText: Text
  },
  model: {
    prop: "title",
    event: "change"
  },
  props: {
    title: {
      type: String,
      required: true
    },
    anchorText: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "入力してください。"
    }
  }
};
</script>

<style>
</style>
