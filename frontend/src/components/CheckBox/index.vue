<template>
  <label :class="labelClass">
    <input
      type="checkbox"
      class="input"
      :tabindex="tabindex"
      :checked="checked"
      :disabled="disabled"
      ref="input"
      @change="change"
    >
    <span :class="boxClass">
      <span :class="markClass" v-if="checked"></span>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: [Number, String],
      default: 0,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.autofocus && !this.disabled) {
      this.$refs.input.focus();
    }
  },
  methods: {
    change(e) {
      this.$emit(EVENT, !this.checked);
    },
  },
  computed: {
    labelClass() {
      return {
        'label-position': true,
        'label-normal': !this.disabled,
        'label-disabled': this.disabled,
      };
    },
    boxClass() {
      return {
        'box-position': true,
        'box-normal': !this.disabled,
        'box-disabled': this.disabled,
      };
    },
    markClass() {
      return {
        'mark-position': true,
        'mark-active': !this.disabled,
        'mark-disable': this.disabled,
      };
    },
  },
};
</script>

<style scoped>
.label-position {
  display: inline-block;
  position: relative;
}

.label-normal {
  cursor: pointer;
}

.label-disabled {
  color: gray;
  cursor: default;
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

.box-position {
  display: inline-block;
  height: 17px;
  width: 17px;
  border-radius: 4px;
  position: relative;
  margin-right: 3px;
  vertical-align: -4px;
}

.box-normal {
  background-color: rgb(51, 112, 149, 0.6);
  border: 2px solid rgb(51, 112, 149);
}

.box-disabled {
  border: 2px solid gray;
  background-color: white;
}

.input:focus {
  outline: none;
}
.input:focus ~ .box-normal,
.input:active ~ .box-normal {
  border: 2px solid rgba(166, 213, 243, 0.822);
}

.mark-active {
  border: solid white;
}

.mark-disable {
  border: solid gray;
}
.mark-position {
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 5px;
  left: 2px;
  width: 60%;
  height: 40%;
  transform: rotate(-45deg);
  border-radius: 3px;
  border-width: 0 0 3px 3px;
}
</style>
