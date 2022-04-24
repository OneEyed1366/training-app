<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UniversalTemplate from "./Universal.vue";

@Component({
  name: "DesktopTemplate",
})
export default class DesktopTemplate extends UniversalTemplate {
  public className = "DesktopTemplate";
}
</script>

<template>
  <article :class="className" :style="computedStyles">
    <slot name="navbar" />
    <slot name="body" />
  </article>
</template>

<style lang="scss">
.DesktopTemplate {
  display: flex;
  flex-flow: row nowrap;
}
</style>
