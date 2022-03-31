<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold underline text-center">Toronto Forecast</h1>

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
          value="Toronto"
          placeholder="Toronto"
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
    this.updateData();
  },
  methods: {
    onSubmit() {
      this.updateData();
    },

    updateData() {
      weatherService.getDataByCityName(this.$refs.city.value).then((res) => {
        // Each day has 8 measurements ( every 3 hours in 24 hour day)
        // so let's just get the first measurement for each day
        this.weatherData = res.filter((day, idx) => idx % 8 === 0);
      });
    },
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