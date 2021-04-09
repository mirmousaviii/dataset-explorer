<template>
  <md-app class="app-main">

    <md-app-toolbar class="md-primary">
      <span class="md-title">company name</span>
    </md-app-toolbar>

    <md-app-content class="main-content">
      <router-view :key="$route.path" class="animated"></router-view>
    </md-app-content>

  </md-app>
</template>

<style>
.app-main {
  transform: translate3d(0, 0, 0);
  height: 100vh;
}

.main-content {
  width: 80%;
  margin-left: 10%;
}

.md-content {
  padding: 0 !important;
}
</style>