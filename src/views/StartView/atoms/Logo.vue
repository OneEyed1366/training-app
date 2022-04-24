<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "StartViewLogo",
})
export default class StartViewLogo extends Vue {
  public className = "StartView__Logo";
}
</script>

<template>
  <article :class="className">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.StartView__Logo {
  margin: 0 auto;
}
</style>
