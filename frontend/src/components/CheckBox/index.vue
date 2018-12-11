<template>
  <label class="label-wrapper" :tabindex="tabindex" @keypress.space="change">
    <input type="checkbox" class="input" tabindex="-1" :checked="checked" @change="change">
    <span class="box">
      <span class="mark" v-if="checked"></span>
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
    tabindex: {
      type: [Number, String],
      default: 0,
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
.label-wrapper {
  display: inline-block;
  position: relative;
}

.input {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 0;
  width: 0;
  opacity: 0;
  bottom: 0;
}

.input:focus {
  outline: none;
}

.box {
  display: inline-block;
  height: 17px;
  width: 17px;
  background-color: rgb(51, 112, 149, 0.6);
  border: 2px solid rgb(51, 112, 149);
  border-radius: 4px;
  position: relative;
  margin-right: 3px;
  vertical-align: -4px;
}

.label-wrapper:focus {
  outline: none;
}

.label-wrapper:focus > .box {
  border: 2px solid rgb(140, 208, 250);
}

.label-wrapper:active > .box {
  border: 2px solid rgb(51, 112, 149);
}

.mark {
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 5px;
  left: 2px;
  width: 60%;
  height: 40%;
  border: solid white;
  border-width: 0 0 3px 3px;
  transform: rotate(-45deg);
  border-radius: 3px;
}
</style>
