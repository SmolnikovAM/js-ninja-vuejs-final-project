<template>
  <label class="label-wrapper">
    <input type="checkbox" class="input" :checked="checked" @change="$emit('change', !checked)">
    <span class="box">
      <span class="mark"></span>
    </span>
    <slot></slot>
  </label>
</template>

<script>
const EVENT = 'change';

export default {
  name: 'CheckBox',
  model: {
    prop: 'checked',
    event: EVENT,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change() {
      this.$emit(EVENT, !this.checked);
    },
  },
};
</script>

<style scoped>
</style>
