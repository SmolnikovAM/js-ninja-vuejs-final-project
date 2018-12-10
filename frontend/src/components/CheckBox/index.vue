<template>
  <label class="label-wrapper">
    <input type="checkbox" class="input">
    <span class="box">
      <span class="mark"></span>
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'CheckBox',
};
</script>

<style scoped>
</style>
