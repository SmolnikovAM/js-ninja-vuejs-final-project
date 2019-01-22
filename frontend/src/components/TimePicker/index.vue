<template>
  <span>
    <span>{{ dateToString }}</span>
    <span>{{ dateAMPM }}</span>
  </span>
</template>

<script>
const addZeros = d => `00${d ? d : ''}`.slice(-2);

export default {
  name: 'TimePicker',
  props: {
    date: { type: Date, default: null },
  },
  computed: {
    dateToString() {
      if (this.date) {
        const hh = this.date.getHours();
        const min = addZeros(this.date.getMinutes());
        return `${hh % 12 || 12}:${min}`;
      }
      return '';
    },

    dateAMPM() {
      if (this.date) {
        const hh = this.date.getHours();
        return hh > 12 ? 'PM' : 'AM';
      }
      return '';
    },
  },
};
</script>

