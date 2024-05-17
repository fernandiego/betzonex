<template>
  <v-app>
    <v-navigation-drawer app>
      <SideBar />
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Accordion title="400m estilo livre (M)" />
        <Accordion title="400m estilo livre (M)" />
        <Accordion title="400m estilo livre (F)" />
        <Accordion title="Revezamento 4x100m estilo livre (F)" />
        <Accordion title="Revezamento 4x100m estilo livre (M)" />
        <Accordion title="400m medley (M)" />
        <Accordion title="100m borboleta (F)" />
        <Accordion title="100m peito (M)" />
        <Accordion title="400m medley (F)" />
        <Accordion title="200m estilo livre (M)" />
        <Accordion title="100m costas (M)" />
        <Accordion title="100m peito (F)" />
        <Accordion title="200m estilo livre (F)" />
        <Accordion title="100m costas (F)" />
        <Accordion title="800m estilo livre (M)" />
        <Accordion title="100m estilo livre (F)" />
        <Accordion title="200m borboleta (M)" />
        <Accordion title="200m peito (M)" />
        <Accordion title="1500m estilo livre (F)" />
        <Accordion title="100m estilo livre (M)" />
        <Accordion title="200m borboleta (F)" />
        <Accordion title="200m costas (M)" />
        <Accordion title="200m peito (F)" />
        <Accordion title="Revezamento 4x200m estilo livre (F)" />
        <Accordion title="50m estilo livre (M)" />
        <Accordion title="200m costas (F)" />
        <Accordion title="200m medley (M)" />
        <Accordion title="100m estilo borboleta (M)" />
        <Accordion title="200m medley (F)" />
        <Accordion title="800m estilo livre (F)" />
        <Accordion title="Revezamento misto 4x100m medley" />
        <Accordion title="50m estilo livre (F)" />
        <Accordion title="1500m estilo livre (M)" />
        <Accordion title="Revezamento 4x100m medley (M)" />
        <Accordion title="Revezamento 4x100m medley (F)" />
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import Accordion from "./components/Accordion.vue";
import SideBar from "./components/SideBar.vue";


</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
