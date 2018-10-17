<template>
  <div>
    <test-example name="test">
        <div slot="content">
          <div> inside slot div</div>
        </div>
      </test-example>
  </div>
</template>

<script>
// @ is an alias to /src
import TestExample from '@/components/TestExample';

export default {
  name: 'home',
  components: {
    TestExample,
  },
};
</script>
