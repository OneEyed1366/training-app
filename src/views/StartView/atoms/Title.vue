<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "StartViewTitle",
})
export default class StartViewTitle extends Vue {
  public className = "StartView__Title";
}
</script>

<template>
  <header :class="className">
    <strong class="bold">
      <slot name="bold" />
    </strong>
    <span class="normal">
      <slot name="normal" />
    </span>
  </header>
</template>

<style lang="scss" scoped>
.StartView__Title {
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-flow: row wrap;

  .bold,
  .normal {
    width: 100%;
  }

  .bold {
    font-weight: 700;
  }
}
</style>
