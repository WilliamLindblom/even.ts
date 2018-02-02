<template>
  <div id="app">
    <et-nav-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EtNavBar from '@/components/EtNavBar.vue';

@Component({
  components: {
    EtNavBar,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
@import "~bulma/bulma.sass";
</style>
