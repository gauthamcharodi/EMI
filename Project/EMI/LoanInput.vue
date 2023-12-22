<!-- components/LoanInputs.vue -->
<template>
  <div class="loan-inputs">
    <!-- Input fields for loan details -->
    <!-- Add your HTML input fields here -->

    <button @click="calculate">Calculate</button>
  </div>
</template>

<script>
export default {
  methods: {
    calculate() {
      // Gather input values and emit 'calculate' event
      const loanDetails = {
        // Collect loan details here
      };

      this.$emit("calculate", loanDetails);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
