<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

const IProperties = Vue.extend({
  name: "StartWiew",
  props: {},
});

@Component
export default class StartWiew extends IProperties {
  public className = "StartWiew";
}
</script>

<template>
  <article :class="className"></article>
</template>

<style lang="scss" scoped>
.StartWiew {
  display: flex;
  flex: 1 1 100%;
}
</style>
