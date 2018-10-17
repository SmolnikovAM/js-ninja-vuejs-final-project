<template>
  <div class="node" >
    <div class="title">{{ msg }}</div>
      <slot name="content">
      </slot> 
  </div>
</template>

<script>
export default {
  name: 'TestExample',
  props: { msg: { type: String } },
  data: () => ({}),
};
</script>

<style scoped>
.node {
  background: rgba(110, 136, 255, 0.8);
  border: 2px solid #4e58bf;
  border-radius: 10px;
  min-width: 180px;
  height: auto;
  padding-bottom: 6px;
  box-sizing: content-box;
  position: relative;
  user-select: none;
}

.title {
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  padding: 8px;
}
</style>
