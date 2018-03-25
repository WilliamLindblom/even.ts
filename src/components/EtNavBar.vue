<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      Even.ts
    </a>

    <button
        class="button navbar-burger is-dark"
        :class="{ 'is-active': isMobileNavigation }"
        @click="toggleMobileNavigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div class="navbar-menu is-dark" :class="{ 'is-active': isMobileNavigation }">
      <div class="navbar-end">
          <router-link class="navbar-item" :to="{ name: 'home' }"> Home </router-link>
      </div>
  </div>
</nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EtNavBar extends Vue {
    private isMobileNavigation: boolean = false;

    private toggleMobileNavigation() {
        this.isMobileNavigation = !this.isMobileNavigation;
    }
}
</script>

<style lang="scss" scoped>
</style>


