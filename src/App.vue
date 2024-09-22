<template>
  <div class="wrap">
    <Left_menu></Left_menu>
    <div class="contents_wrap">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import Left_menu from './components/left_menu.vue';

export default {
  name: 'App',
  components: {
    Left_menu
  },
  setup() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
.wrap{display:flex;justify-content: flex-start;align-items: stretch;width: max-content;height:max-content;}
</style>
