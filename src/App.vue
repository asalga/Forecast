<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold underline text-center">
      {{ formatCityName(cityHeader) }} Forecast
    </h1>

    <temperature-unit ref="temperatureUnit"></temperature-unit>

    <form
      v-on:submit.prevent="onSubmit"
      class="bg-white rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <input
          ref="city"
          class="
            shadow
            appearance-none
            border
            rounded
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="city"
          type="text"
          v-model="currCity"
          :placeholder="defaultCity"
          v-bind:class="{ error: !isValid }"
        />
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="button"
          @click="updateData"
        >
          Go
        </button>
      </div>
    </form>

    <div class="container">
      <ul
        class="
          mx-auto
          grid
          gap-4
          md:grid-cols-5
          sm:grid-cols-2
          grid-cols-1
          w-1/2
          md:w-full
        "
      >
        <li v-for="item in weatherData" :key="item">
          <WeatherCard
            :tempData="item"
            :unit="this.$refs.temperatureUnit.getUnit()"
          ></WeatherCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import WeatherCard from "@/components/WeatherCard.vue";
import TemperatureUnit from "@/components/TemperatureUnit.vue";
import weatherService from "./js/weatherService";

const DefaultCity = "Toronto";

export default {
  name: "App",
  components: {
    WeatherCard,
    TemperatureUnit,
  },

  mounted() {
    this.updateData();
  },

  methods: {
    // quebec => Quebec
    formatCityName(cityName) {
      return cityName[0].toUpperCase() + cityName.substring(1);
    },

    /*
      Each day has 8 samples with min and max temperatures which 
      correspond to that particular sample, so we need to iterate over
      all the samples for each day and find the min and max / high and low
    */
    decorateDailyMinMaxTemps(res) {
      // Group data by date
      let groupedByDate = _.groupBy(res, (d) => d.dt_txt.split(" ")[0]);
      let groupedArr = Object.values(groupedByDate);
      let minMaxTemps = groupedArr.map((g) => {
        let dailyMin = _.min(g.map((d) => d.main.temp_min));
        let dailyMax = _.max(g.map((d) => d.main.temp_max));
        return { dailyMin, dailyMax };
      });

      // Each day has 8 measurements (every 3 hours in 24 hour day)
      // so let's just get the first measurement for each day
      let weatherData = res.filter((day, idx) => idx % 8 === 0);

      weatherData.forEach((day, idx) => {
        day.main.daily_min = minMaxTemps[idx].dailyMin;
        day.main.daily_max = minMaxTemps[idx].dailyMax;
      });

      return weatherData;
    },

    onSubmit() {
      this.updateData();
    },

    updateData() {
      weatherService
        .getDataByCityName(this.$refs.city.value)
        .then((res) => {
          this.weatherData = this.decorateDailyMinMaxTemps(res);
          this.currCity = this.cityHeader = this.$refs.city.value;
          this.isValid = true;
        })
        .catch(() => {
          this.isValid = false;
        });
    },
  },

  data() {
    return {
      defaultCity: DefaultCity,
      currCity: DefaultCity,
      cityHeader: DefaultCity,
      isValid: true,
      weatherData: [],
    };
  },
};
</script>

<style lang="scss" >
html {
  background: white;
}

h1 {
  color: black;
}

.error {
  border: 1px solid red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>