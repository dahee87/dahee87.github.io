<template>
  <div class="wrap">
    <Left_menu></Left_menu>
    <div class="contents_wrap">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import Left_menu from './components/LeftMenu.vue';

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
<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrap{flex-grow:1;display:flex;justify-content: flex-start;align-items: stretch;}
.contents_wrap{flex-grow:1;padding:20px;}
</style>
