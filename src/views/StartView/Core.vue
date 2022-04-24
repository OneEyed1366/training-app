<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import StartViewLogo from "./atoms/Logo.vue";
import StartViewTitle from "./atoms/Title.vue";
import StartViewButton from "./atoms/Button.vue";

const IProperties = Vue.extend({
  name: "StartView",
  components: {
    StartViewLogo,
    StartViewTitle,
    StartViewButton,
  },
});

@Component
export default class StartView extends IProperties {
  public className = "StartView";
}
</script>

<template>
  <article :class="className">
    <StartViewLogo> Some cool logo </StartViewLogo>
    <StartViewTitle>
      <template v-slot:bold> Эффективные тренировки </template>
      <template v-slot:normal>на дому </template>
    </StartViewTitle>
    <section :class="className + '__Buttons'">
      <StartViewButton text="Тренировки для мужчин" gender="male" />
      <StartViewButton text="Тренировки для женщин" gender="female" />
    </section>
  </article>
</template>

<style lang="scss" scoped>
%flex-vertical {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.StartView {
  @extend %flex-vertical;
  gap: 1rem;

  &__Buttons {
    @extend %flex-vertical;
    max-width: 50%;
    margin: 0 auto;
    gap: 0.5rem;
  }
}
</style>
