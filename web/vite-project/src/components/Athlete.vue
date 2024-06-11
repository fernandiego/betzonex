<template>
  <div>
    <div v-if="selectedAthletes.length">
      <v-btn
          v-for="(athlete, index) in selectedAthletes"
          :key="athlete"
          :class="getButtonClass(athlete)"
          @click.stop="removeSelection(athlete)"
          block
      >
        {{ athlete }}
      </v-btn>
    </div>
    <v-btn
        v-for="(athlete, index) in athletes"
        :key="index"
        :class="{ selected: selectedAthletes.includes(athlete.name) }"
        @click="toggleSelection(athlete.name)"
        block
    >
      {{ athlete.name }} - {{ athlete.nationality }} {{ athlete.times }}
    </v-btn>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import {useSelectionStore} from '../store/selectionStore.js'

const props = defineProps({
  jsonFilePath: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
});

const storePinia = useSelectionStore()

const athletes = ref([]);
const selectedAthletes = ref([]);

const fetchAthletes = async () => {
  try {
    const response = await fetch(new URL(`/public/assets/provas/${props.jsonFilePath}`, import.meta.url));
    const data = await response.json();
    athletes.value = data.athletes;
  } catch (error) {
    console.error('Failed to fetch athletes:', error);
  }
};

const toggleSelection = (name) => {
  if (selectedAthletes.value.includes(name)) {
    removeSelection(name);
  } else if (selectedAthletes.value.length < 3) {
    selectedAthletes.value.push(name);
  }
  printSelections();
  storePinia.updateSelection({ event: props.eventName, athletes: selectedAthletes.value });
};

const removeSelection = (name) => {
  selectedAthletes.value = selectedAthletes.value.filter((athlete) => athlete !== name);
  printSelections();
  storePinia.updateSelection({ event: props.eventName, athletes: selectedAthletes.value });
};

const getButtonClass = (name) => {
  const index = selectedAthletes.value.indexOf(name);
  if (index === 0) return 'gold';
  if (index === 1) return 'silver';
  if (index === 2) return 'bronze';
  return '';
};

const printSelections = () => {
  console.log(`Selected athletes for ${props.eventName}:`, selectedAthletes.value);
};

// Watch for changes in selectedAthletes and update the store
watch(selectedAthletes, (newSelection) => {
  storePinia.updateSelection({
    event: props.eventName,
    athletes: newSelection,
  });
}, {deep: true});

onMounted(async () => {
  await fetchAthletes();
  selectedAthletes.value = storePinia.getSelectionsByEvent(props.eventName);
});
</script>

<style scoped>
.gold {
  background-color: gold;
  color: black;
  position: relative;
}

.silver {
  background-color: silver;
  color: black;
  position: relative;
}

.bronze {
  background-color: #cd7f32;
  color: black;
  position: relative;
}

.selected {
  background-color: #c5edc5;
}
</style>
