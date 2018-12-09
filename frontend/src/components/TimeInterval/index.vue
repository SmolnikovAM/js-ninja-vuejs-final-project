<template>
  <div>
    <check-box/>
    <day-of-week/>
    <time-picker/>
    <span>to</span>
    <time-picker/>
    <button>edit</button>
  </div>
</template>

<script>
import CheckBox from '../CheckBox';
import DayOfWeek from '../DayOfWeek';
import TimePicker from '../TimePicker';

export default {
  name: 'TimeInterval',
  components: { CheckBox, DayOfWeek, TimePicker },
};
</script>

<style scoped>
</style>
