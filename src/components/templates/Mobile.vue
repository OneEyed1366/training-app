<script lang="ts">
import { Component } from "vue-property-decorator";
import UniversalTemplate from "./Universal.vue";

@Component({
  name: "MobileLayout",
  props: {},
})
export default class MobileLayout extends UniversalTemplate {
  public className = "MobileLayout";
}
</script>

<template>
  <article :class="className" :style="computedStyles">
    <slot name="body">Body content</slot>
    <slot name="navbar">Navbar content</slot>
  </article>
</template>

<style lang="scss">
.MobileLayout {
  display: flex;
  flex: 1 1 100%;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
