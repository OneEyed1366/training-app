<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <font-awesome-icon icon="fa-regular fa-clone" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/colors.css";
@import "./styles/fonts.css";
</style>
