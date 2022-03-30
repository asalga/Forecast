<template>
  <div class="card rounded-lg text-center border-gray-300 mx-auto">
    <h1 class="day">{{ formatDate(data.dt_txt) }}</h1>
    <h1>{{ data.weather[0].main }}</h1>
    <img :src="getIcon(data.weather[0].icon)" class="mx-auto" />
    <div>{{ data.main.feels_like }}°C</div>
  </div>
</template>

<script>
import formatDate from "@/js/formatDate";

export default {
  name: "WeatherCard",
  methods: {
    getIcon,
    formatDate,
  },
  props: {
    data: Object,
  },
};

// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
function getIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
</script>

<style scoped lang="scss">
.card {
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
