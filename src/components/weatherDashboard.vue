<template>
    <div class="container mt-5">
      <VueApexCharts
        type="pie"
        height="350"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch, defineProps } from 'vue';
  import VueApexCharts from 'vue3-apexcharts';
  
  const props = defineProps<{ weatherData: any }>();
  
  const chartOptions = ref({
    chart: {
      id: 'weather-pie-chart'
    },
    labels: ['Temperature (°C)', 'Humidity (%)', 'Wind Speed (kph)', 'Pressure (mb)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });
  
  const series = ref([0, 0, 0, 0]);
  
  watch(
    () => props.weatherData,
    (newData) => {
      if (newData && newData.current) {
        series.value = [
          newData.current.temp_c,
          newData.current.humidity,
          newData.current.wind_kph,
          newData.current.pressure_mb
        ];
      }
    },
    { immediate: true }
  );
  </script>
  