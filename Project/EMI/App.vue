<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <h1>EMI Calculator</h1>
    </header>
    <main>
      <loan-inputs @calculate="calculateEMI" />
      <loan-results v-if="emiResults" :results="emiResults" />
    </main>
  </div>
</template>

<script>
import LoanInput from "./LoanInput.vue";
import LoanResult from "./LoanResult.vue";

export default {
  components: {
    LoanInput,
    LoanResult,
  },
  data() {
    return {
      emiResults: null,
    };
  },
  methods: {
    calculateEMI(results) {
      // Perform EMI calculation and update emiResults
      // EMI calculation logic can be implemented here
      this.emiResults = results;
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
