<template>
  <v-expansion-panels multiple>
    <v-expansion-panel>
      <v-expansion-panel-title @click="toggleExpand">{{ title }}</v-expansion-panel-title>
      <transition name="accordion-transition">
        <v-expansion-panel-text v-show="expanded">
          <slot></slot>
        </v-expansion-panel-text>
      </transition>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
.v-expansion-panel-title {
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}
.v-expansion-panel-title:hover {
  background-color: #333333;
}

.accordion-transition-enter-active,
.accordion-transition-leave-active {
  transition: max-height 0.5s ease;
}

.accordion-transition-enter-from,
.accordion-transition-leave-to {
  max-height: 0;
  overflow: hidden;
}

.v-expansion-panel-text {
  padding: 10px;
  border-top: 1px solid #ccc;
  width: 100%;
  max-height: 500px; /* Adjust as needed */
  overflow: hidden;
}
</style>
