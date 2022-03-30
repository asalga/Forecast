<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold underline text-center">Toronto Forecast</h1>
    <!-- <input /> -->

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
        <!-- <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> -->
        <li v-for="item in weatherData" :key="item">
          <!-- <Card v-for="d in data" :key="d.test" :data="data"> </Card> -->
          <Card :data="item"></Card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import weatherService from "./js/weatherService";

export default {
  name: "App",
  components: {
    Card,
  },
  mounted() {
    weatherService.getDataByLatLong(0, 0).then((res) => {
      // Each day has 8 measurements ( every 3 hours in 24 hour day)
      // so let's just get the first measurement for each day
      this.weatherData = res.filter((day, idx) => idx % 8 === 0);
    });
  },
  data() {
    return {
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>


