<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {
  private message: string = 'Welcome home!';
}
</script>

<style lang="scss" scoped>
</style>

