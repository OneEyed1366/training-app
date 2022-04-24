<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

const IProperties = Vue.extend({
  name: "DesktopTemplate",
});

@Component
export default class DesktopTemplate extends IProperties {
  public className = "DesktopTemplate";
}
</script>

<template>
  <article :class="className">
    <slot name="navbar" />
    <slot name="body" />
  </article>
</template>

<style lang="scss">
html {
  font-size: 25px;
}

.DesktopTemplate {
  display: flex;
  flex-flow: row nowrap;
}
</style>
