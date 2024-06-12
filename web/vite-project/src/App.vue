<template>
  <v-app>
    <SideBar />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
import MeusPalpites from "./pages/MeusPalpites.vue";

</script>

<style scoped>

</style>
