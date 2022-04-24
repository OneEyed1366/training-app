<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "UniversalTemplate",
})
export default class UniversalTemplate extends Vue {
  private innerHeight = window.innerHeight;

  get computedStyles(): string {
    return `height: ${this.innerHeight - 5}px`;
  }

  onResize(): void {
    this.innerHeight = window.innerHeight;
  }

  mounted() {
    window.addEventListener("resize", this.onResize);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style>
@media (max-width: 1568px) {
  html {
    font-size: 30px;
  }
}
@media (max-width: 1024px) {
  html {
    font-size: 25px;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 20px;
  }
}
@media (max-width: 568px) {
  html {
    font-size: 14px;
  }
}
</style>
