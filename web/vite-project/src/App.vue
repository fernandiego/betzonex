<template>
  <div id="app">
    <Sidebar/>
    <div style="align-content: center"><h2>400m estilo livre (M)</h2></div>
    <div class="content">
      <Combobox @selectName="selectName"/>
      <button @click="calculatePoints">Resultado</button>
    </div>
    <div style="align-content: center"><h2>400m estilo livre (F)</h2></div>

    <div style="align-content: center"><h2>Revezamento 4x100m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>Revezamento 4x100m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>400m medley (M)</h2></div>
    <div style="align-content: center"><h2>100m borboleta (F)</h2></div>
    <div style="align-content: center"><h2>100m peito (M)</h2></div>
    <div style="align-content: center"><h2>400m medley (F)</h2></div>
    <div style="align-content: center"><h2>200m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>100m costas (M)</h2></div>
    <div style="align-content: center"><h2>100m peito (F)</h2></div>
    <div style="align-content: center"><h2>200m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>100m costas (F)</h2></div>
    <div style="align-content: center"><h2>800m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>100m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>200m borboleta (M)</h2></div>
    <div style="align-content: center"><h2>200m peito (M)</h2></div>
    <div style="align-content: center"><h2>1500m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>100m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>200m borboleta (F)</h2></div>
    <div style="align-content: center"><h2>200m costas (M)</h2></div>
    <div style="align-content: center"><h2>200m peito (F)</h2></div>
    <div style="align-content: center"><h2>Revezamento 4x200m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>50m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>200m costas (F)</h2></div>
    <div style="align-content: center"><h2>200m medley (M)</h2></div>
    <div style="align-content: center"><h2>100m estilo borboleta (M)</h2></div>
    <div style="align-content: center"><h2>200m medley (F)</h2></div>
    <div style="align-content: center"><h2>800m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>Revezamento misto 4x100m medley</h2></div>
    <div style="align-content: center"><h2>50m estilo livre (F)</h2></div>
    <div style="align-content: center"><h2>1500m estilo livre (M)</h2></div>
    <div style="align-content: center"><h2>Revezamento 4x100m medley (M)</h2></div>
    <div style="align-content: center"><h2>Revezamento 4x100m medley (F)</h2></div>

  </div>
</template>

<script setup>
import Sidebar from './components/SideBar.vue';
import Combobox from './components/ComboBox.vue';
import winnersData from './assets/winners.json';

const winners = winnersData.winners;

let selectedNames = [];
let points = 0;

function selectName(name) {
  selectedNames.push(name);
  console.log("Selected names:", selectedNames);
}


function calculatePoints(name) {

  console.log(name);
  console.log("Calculating points...");
  console.log("Selected names:", selectedNames);
  points = 0; // Reset points
  selectedNames.forEach(selectedName => {
    const winner = winners.find(winner => winner.name === selectedName);
    if (winner) {
      points += 10; // Add 10 points for each winner selected
      console.log(`Selected ${selectedName}. Points: ${points}`);
    } else {
      console.log(`Selected ${selectedName}. No points awarded.`);
    }
  });
  selectedNames = []; // Reset selected names after calculating points
}



</script>

<style>
/* Add any additional styling for the main content area here */
.content {
  margin-left: 200px; /* Adjust according to the width of your sidebar */
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

.combobox {
  flex: 0 0 calc(33.33% - 20px); /* Adjust the width as needed */
  margin-right: 20px;
  margin-bottom: 20px;
}

.combobox:last-child {
  margin-right: 0;
}

@media (max-width: 600px) {
  .combobox {
    flex: 0 0 calc(100% - 20px);
    margin-right: 0;
  }
}
</style>
