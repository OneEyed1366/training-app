<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const IProperties = Vue.extend({
  name: "MobileLayout",
  props: {},
});

@Component
export default class MobileLayout extends IProperties {
  public className = "MobileLayout";
}
</script>

<template>
  <article :class="className">
    <slot name="body">Body content</slot>
    <slot name="navbar">Navbar content</slot>
  </article>
</template>

<style lang="scss">
html {
  font-size: 30px;
}

.MobileLayout {
  display: flex;
  flex: 1 1 100%;
  flex-flow: column nowrap;
}
</style>
