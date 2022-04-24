<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MobileTemplate from "@/components/templates/Mobile.vue";
import DesktopTemplate from "@/components/templates/Desktop.vue";

@Component({
  components: {
    MobileTemplate,
    DesktopTemplate,
  },
})
export default class App extends Vue {
  public isMobileLayout = false;
  public isDesktopLayout = false;

  onResize(): void {
    this.detectLayout(window.innerWidth);
  }

  mounted() {
    this.detectLayout(window.innerWidth);
    window.addEventListener("resize", this.onResize);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  detectLayout(data: number) {
    if (data >= 568) {
      this.isDesktopLayout = true;
      this.isMobileLayout = false;
    } else {
      this.isMobileLayout = true;
      this.isDesktopLayout = false;
    }
  }
}
</script>

<template>
  <div id="app">
    <DesktopTemplate v-if="isDesktopLayout">
      <template v-slot:navbar>
        <nav />
      </template>
      <template v-slot:body>
        <router-view />
      </template>
    </DesktopTemplate>
    <MobileTemplate v-else>
      <template v-slot:navbar>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </template>
      <template v-slot:body>
        <router-view />
      </template>
    </MobileTemplate>
  </div>
</template>

<style lang="scss">
@import "./styles/colors.css";
@import "./styles/fonts.css";
</style>
