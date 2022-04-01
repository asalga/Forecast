<template>
  <div class="weather-card rounded-lg text-center border-gray-300 mx-auto">
    <h1 class="day">
      {{ getDayName(tempData.dt_txt) }} {{ formatDate(tempData.dt_txt) }}
    </h1>
    <h1>{{ tempData.weather[0].main }}</h1>
    <img :src="this.getIcon(tempData.weather[0].icon)" class="mx-auto" />
    <div>{{ this.temp }}°{{ this.tempUnit }}</div>
  </div>
</template>

<script>
import { formatDate, getDayName } from "@/js/DateUtils";
import { celciusToFahrenheit } from "@/js/DataUtils";

export default {
  name: "WeatherCard",
  created() {
    this.temp = this.getTemp();

    this.emitter.on("change-temp", (evt) => {
      this.tempUnit = evt.data;
      this.temp = this.getTemp();
    });
  },
  data: function () {
    return {
      tempUnit: this.unit,
      temp: 0,
    };
  },
  methods: {
    // icon codes: openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    getIcon: (iconCode) => {
      return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    },
    getTemp() {
      let t = this.tempData.main.temp;

      // also possible to just change the api call, but then we'd need to re-request the data.
      if (this.tempUnit === "F") {
        t = celciusToFahrenheit(t);
      }
      return Math.round(t);
    },
    formatDate,
    getDayName,
  },
  props: {
    tempData: Object,
    unit: String,
  },
};
</script>

<style scoped lang="scss">
.weather-card {
  padding: 0.5rem;
  background: #d7d8ca;

  box-shadow: rgba(135, 57, 57, 0.24) 0px 3px 8px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  h1.day {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
