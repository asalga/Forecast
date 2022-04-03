<template>
  <div class="weather-card rounded-lg text-center border-gray-300 mx-auto">
    <h1 class="day">
      {{ formatDate(tempData.dt_txt) }}
    </h1>

    <h1>{{ tempData.weather[0].description }}</h1>

    <h2 class="feels-like">
      feels like: {{ this.feelsLike }}°{{ this.tempUnit }}
    </h2>

    <img :src="this.getIcon(tempData.weather[0].icon)" class="icon mx-auto" />

    <div class="min-max">
      {{ this.tempMin }}°{{ this.tempUnit }}
      /
      {{ this.tempMax }}°{{ this.tempUnit }}
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/js/DateUtils";
import { celciusToFahrenheit } from "@/js/DataUtils";

export default {
  name: "WeatherCard",
  created() {
    this.updateView();

    this.emitter.on("change-temp", (evt) => {
      this.tempUnit = evt.data;
      this.updateView();
    });
  },
  data: function () {
    return {
      tempUnit: this.unit,
      feelsLike: 0,
      tempMin: 0,
      tempMax: 0,
    };
  },
  methods: {
    updateView() {
      this.feelsLike = this.toUserPrefTemp(this.tempData.main.feels_like);
      this.tempMin = this.toUserPrefTemp(this.tempData.main.temp_min);
      this.tempMax = this.toUserPrefTemp(this.tempData.main.temp_max);
    },

    // icon codes: openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    getIcon: (iconCode) => {
      return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    },

    toUserPrefTemp(t) {
      let temp = t;
      // also possible to just change the api call, but then we'd need to re-request the data.
      if (this.tempUnit === "F") {
        temp = celciusToFahrenheit(temp);
      }
      return Math.round(temp);
    },

    formatDate,
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

  .day {
    font-weight: bold;
    text-decoration: underline;
  }

  .icon {
    height: 100px;
    width: auto;
  }

  .feels-like {
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem 0;
  }

  .min-max {
    color: rgb(87, 78, 78);
  }
}
</style>
