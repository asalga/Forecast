<template>
  <div class="unit" @click="changeTempUnit()">
    unit:
    <span v-bind:class="{ selected: currUnit === 'C' }">°C</span>
    |
    <span v-bind:class="{ selected: currUnit === 'F' }">°F</span>
  </div>
</template>

<script>
export default {
  name: "TemperatureUnit",
  methods: {
    getUnit() {
      return this.currUnit;
    },
    changeTempUnit() {
      this.currUnit = this.currUnit === "C" ? "F" : "C";
      this.emitter.emit("change-temp", { data: this.currUnit });
    },
  },
  data() {
    return {
      currUnit: "C",
    };
  },
};
</script>

<style lang="scss" scoped >
.unit {
  cursor: pointer;

  .selected {
    font-weight: bold;
    color: blue;
  }
}
</style>