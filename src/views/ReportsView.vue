<script setup>

import { onMounted, ref } from "vue";
import { supabase } from "@/lib/supabase_client";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables)

const headers = [
  'Gender',
  'Age Range',
  'Household income range',
  'How familiar are you with the Girl Scouts organization?',
  'Words least associated with Girl Scouts 1',
  'Words least associated with Girl Scouts 2',
  'Words least associated with Girl Scouts 3',
  'Do you feel the girl scouts can contribute to your specific community?',
  'Biggest challenge the youth in your community faces',
  'Zip Code'
]
const results = ref([]);
const get_results = async () => {
  const { data, error } = await supabase
      .from('survey_results')
      .select('answers')
  results.value = [headers, ...data.map(x => x.answers)];
}

const create_gender_chart = async () => {
  const { data, error } = await supabase
      .from('gender_counts')
      .select()
  const ctx = document.getElementById('gender_chart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        data
      }]
    },
    options: {
      responsive: true,
      parsing: {
        xAxisKey: 'gender',
        yAxisKey: 'count'
      }
    }
  })
}

const download = () => {
  if (results.value) {
    const content = "data:text/csv;charset=utf-8,"
        + results.value.map(e => e.join(",")).join("\n");
    const encoded = encodeURI(content);
    const link = document.createElement('a');
    link.setAttribute('href', encoded);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
  }
}

onMounted(async () => {
  await get_results()
  // await create_gender_chart()
})

</script>

<template>
  <div class="bg-green-500">
    <div class="mx-auto max-w-7xl pt-1.5 pb-7 px-3">
      <div class="text-sm"><span class="underline">Get Involved</span> / <strong>Take a Survey</strong></div>
      <div class="text-4xl mt-3">Take a Survey</div>
    </div>
  </div>
  <div class="m-5">
    <div class="mx-auto max-w-5xl">

      <canvas id="gender_chart"></canvas>
      <button class="px-5 py-2 bg-green-500 text-black rounded-md font-bold" @click="download">Download</button>
    </div>
  </div>
</template>

<style scoped>

</style>