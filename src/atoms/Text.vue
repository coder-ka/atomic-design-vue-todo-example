<template>
  <span class="text-grey-darkest">{{text}}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>