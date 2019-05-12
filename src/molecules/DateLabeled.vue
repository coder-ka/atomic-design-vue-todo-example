<template>
  <div class="flex items-end">
    <span>
      <x-input
        v-if="editable"
        type="date"
        :value="date"
        :placeholder="placeholder"
        @change="$emit('change', $event.target.value)"
      ></x-input>
      <x-text v-else class="mr-4 text-sm" :text="date"></x-text>
      <x-text class="text-grey-darker text-sm" :text="label"></x-text>
    </span>
  </div>
</template>

<script>
import Input from "../atoms/Input.vue";
import Text from "../atoms/Text";

export default {
  components: {
    XInput: Input,
    XText: Text
  },
  model: {
    prop: "date",
    event: "change"
  },
  props: {
    date: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "日付を入力してください。"
    }
  }
};
</script>

<style>
</style>
