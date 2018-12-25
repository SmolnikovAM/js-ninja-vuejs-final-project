<template>
  <span>{{ dateToString }}</span>
</template>

<script>
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default {
  name: 'DayOfWeek',
  props: {
    date: {
      type: [Date, String, Number, Array],
      default: null,
    },
  },
  computed: {
    dateCheck() {
      switch (true) {
        case this.date instanceof Array:
          return new Date(...this.date);
        case typeof this.date === 'string' &&
          DAYS.indexOf(this.date.toUpperCase()) !== -1:
          return this.date.toUpperCase();
        case ['string', 'number'].some(v => typeof this.date === v):
          return new Date(this.date);
        case this.date instanceof Date:
          return this.date;
        default:
          return null;
      }
    },

    dateToString() {
      switch (true) {
        case this.dateCheck instanceof Date:
          const day = this.dateCheck.getDay();
          return DAYS[day];
        case typeof this.dateCheck === 'string':
          return this.dateCheck;
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>
</style>
