<template>
  <v-app>
    <v-main>
      <v-container>
        <Accordion title="400m estilo livre (M)">
          <Athlete jsonFilePath="400m_estilo_livre_M.json" eventName="400m estilo livre (M)"/>
        </Accordion>
        <Accordion title="400m estilo livre (F)">
          <Athlete jsonFilePath="400m_estilo_livre_F.json" eventName="400m estilo livre (F)"/>
        </Accordion>
        <Accordion title="Revezamento 4x100m estilo livre (F)">
          <Athlete jsonFilePath="Rev_4x100m_livre_F.json" eventName="Revezamento 4x100m estilo livre (F)"/>
        </Accordion>
        <Accordion title="Revezamento 4x100m estilo livre (M)">
          <Athlete jsonFilePath="Rev_4x100m_livre_M.json" eventName="Revezamento 4x100m estilo livre (M)"/>
        </Accordion>
        <Accordion title="400m medley (M)"/>
        <Accordion title="100m borboleta (F)"/>
        <Accordion title="100m peito (M)"/>
        <Accordion title="400m medley (F)"/>
        <Accordion title="200m estilo livre (M)"/>
        <Accordion title="100m costas (M)"/>
        <Accordion title="100m peito (F)"/>
        <Accordion title="200m estilo livre (F)"/>
        <Accordion title="100m costas (F)"/>
        <Accordion title="800m estilo livre (M)"/>
        <Accordion title="100m estilo livre (F)"/>
        <Accordion title="200m borboleta (M)"/>
        <Accordion title="200m peito (M)"/>
        <Accordion title="1500m estilo livre (F)"/>
        <Accordion title="100m estilo livre (M)"/>
        <Accordion title="200m borboleta (F)"/>
        <Accordion title="200m costas (M)"/>
        <Accordion title="200m peito (F)"/>
        <Accordion title="Revezamento 4x200m estilo livre (F)"/>
        <Accordion title="50m estilo livre (M)"/>
        <Accordion title="200m costas (F)"/>
        <Accordion title="200m medley (M)"/>
        <Accordion title="100m estilo borboleta (M)"/>
        <Accordion title="200m medley (F)"/>
        <Accordion title="800m estilo livre (F)"/>
        <Accordion title="Revezamento misto 4x100m medley"/>
        <Accordion title="50m estilo livre (F)"/>
        <Accordion title="1500m estilo livre (M)"/>
        <Accordion title="Revezamento 4x100m medley (M)"/>
        <Accordion title="Revezamento 4x100m medley (F)"/>
        <v-btn @click="printAllSelectionsFinal">Print All Selections</v-btn>
        <v-btn @click="testPontos">testePontos</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Accordion from "../components/Accordion.vue";
import Athlete from "../components/Athlete.vue";
import {useSelectionStore} from "../store/selectionStore.js";

const storePinia = useSelectionStore();


const printAllSelectionsFinal = () => {
  console.log('All selections:', storePinia.getSelections);
};

const testPontos = async () => {
  try {
    const response = await fetch('/assets/winners.json');
    const winners = await response.json();

    let points = 0;
    const selections = storePinia.getSelections;

    Object.keys(selections).forEach(event => {
      const eventWinners = winners[event];
      const userSelections = selections[event];

      if (!eventWinners) {
        console.error(`No winners found for event: ${event}`);
        return;
      }

      if (userSelections[0] === eventWinners.gold) points += 10;
      if (userSelections[1] === eventWinners.silver) points += 7;
      if (userSelections[2] === eventWinners.bronze) points += 5;
    });

    if (points > 0) {
      const authStore = useAuthStore();
      const userStore = useUserStore();
      const currentUser = authStore.getCurrentUser;

      if (currentUser) {
        userStore.updateUserPoints(currentUser.name, points);
      } else {
        console.error('No user is currently logged in.');
      }
    } else {
      console.log('No points scored');
    }
  } catch (error) {
    console.error('Failed to fetch winners:', error);
  }
};



</script>

<style scoped>

</style>
