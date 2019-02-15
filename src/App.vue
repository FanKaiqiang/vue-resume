<template>
  <div id="app">
    <Aside/>
    <router-view/>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Message from "./components/Message";
export default {
  name: "App",
  components: {
    Aside
  }
};
</script>

<style>

a {
  text-decoration: none;
  user-select: none;
  color: #fafafa;
}

body {
  display: flex;
  flex-direction: column;
  background: #eaeaea;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}


</style>
