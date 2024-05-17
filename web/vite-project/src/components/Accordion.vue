<template>
  <v-expansion-panels multiple>
    <v-expansion-panel>
      <v-expansion-panel-title>{{ title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Additional styling for the accordion component if needed */
.v-expansion-panel-title {
  background-color: #000000;
  color: #ffffff;
}
.v-expansion-panel-text {
  padding: 10px;
  border-top: 1px solid #ccc;
  width: 100%;
}
</style>
