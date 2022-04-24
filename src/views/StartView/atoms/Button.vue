<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

type ButtonTypes = "male" | "female";

const IProperties = Vue.extend({
  name: "StartViewButton",
  props: {
    gender: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});

@Component
export default class StartViewButton extends IProperties {
  public className = "StartView__Button";
  private isMale = this.gender === "male";

  get computedClassname(): string {
    if (this.isMale) {
      return `${this.className} male`;
    }

    return `${this.className} female`;
  }
}
</script>

<template>
  <button :class="computedClassname" type="button">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.StartView__Button {
  border-radius: 5px;
  padding: 1rem 1.5rem;
  color: #ffffff;
  font-weight: 300;
  border: 0;
  font-size: 1.2rem;
  transition: all ease 0.2s;

  &.male {
    background-color: var(--blue);

    &:hover {
      background-color: darken(#ffffff, 25%);
    }
  }
  &.female {
    background-color: var(--orange);
  }
}
</style>
