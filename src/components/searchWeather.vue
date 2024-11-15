<template>
    <div class="searchDiv">
        <VueSelect v-model="city" :options="cities" label="name" />
    </div>
</template>
<script lang="ts" setup>
import { ref ,defineEmits,watch} from 'vue';

import VueSelect  from "vue-select";
import cities from "../assets/js/city.json"
import "vue-select/dist/vue-select.css";

const emit = defineEmits(['search-weather'])

const city = ref("");
watch(city, (newX) => {
    emit('search-weather',city.value);
})
</script>
<style>
.searchDiv{
    width: 40%;
}
</style>