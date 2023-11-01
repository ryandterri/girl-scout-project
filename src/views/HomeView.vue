<script setup>
import { supabase } from '@/lib/supabase_client'
import SelectMenu from "@/components/select-menu.vue";
import { ref } from "vue";
import TextInput from "@/components/text-input.vue";

const value = ref(null);

const questions = ref([
  {
    label: 'Gender',
    placeholder: 'Select a gender',
    options: [
      'Male',
      'Female',
      'Prefer not to say'
    ]
  },
  {
    label: 'Age range',
    options: [
      'Below 18',
      '18-29',
      '30-49',
      '50 and above'
    ]
  },
  {
    label: 'Household income range',
    options: ['Below 30k', '31k - 55k', '56k - 89k', '90k - 149k', '150k and above']
  },
  {
    label: 'How familiar are you with the Girl Scouts organization?',
    options: ['Not at all', 'Somewhat', `Very familiar`, `Currently Involved`]
  },
  {
    label: 'Words least associated with Girl Scouts',
    options: ['Crafts', 'STEM', 'College prep', 'Cookies', 'Leadership', 'Scholarship', 'Camp-outs', 'Uniform', 'Only for younger girls', 'Only for older girls', 'Community conscious', 'Untrusting', 'Trusting', 'Forward-thinking', 'Stuck in the past']
  },
  {
    label: 'Do you feel the girl scouts can contribute to your specific community?',
    options: ['Yes', 'No', 'I have not thought about it']
  },
  {
    label: 'Biggest challenge the youth in your community faces',
    options: ['Low high school graduation rate', 'High teenage birth rate', 'Economically disadvantaged', 'Not enough affordable after school activities']
  },
  {
    label: 'Zip Code'
  }
])

const answers = ref([])

const save_answers = async () => {
  const { data } = await supabase
      .from('survey_results')
      .insert({
        answers: answers.value
      })
  answers.value = [];
}

</script>

<template>
  <main>
    <div class="bg-green-500">
      <div class="mx-auto max-w-7xl pt-1.5 pb-7 px-3">
        <div class="text-sm"><span class="underline">Get Involved</span> / <strong>Take a Survey</strong></div>
        <div class="text-4xl mt-3">Take a Survey</div>
      </div>
    </div>

    <div class="mx-auto max-w-5xl">
      <div class="m-5">
        <div class="flex flex-col gap-4 p-5 shadow shadow-gray-500 rounded-lg">

          <select-menu label="Gender" :options="['Male', 'Female', 'Prefer not to say']"
                       placeholder="Select a gender" v-model="answers[0]"></select-menu>

          <select-menu label="Age Range" :options="['Below 18','18-29','30-49','50 and above']"
                       placeholder="Select an option" v-model="answers[1]"></select-menu>

          <select-menu label="Household income range"
                       :options="['Below 30k', '31k - 55k', '56k - 89k', '90k - 149k', '150k and above']"
                       placeholder="Select an option" v-model="answers[2]"></select-menu>

          <select-menu label="How familiar are you with the Girl Scouts organization?"
                       :options="['Not at all', 'Somewhat', `Very familiar`, `Currently Involved`]"
                       placeholder="Select an option" v-model="answers[3]"></select-menu>

          <select-menu label="Words least associated with Girl Scouts"
                       :options="['Crafts', 'STEM', 'College prep', 'Cookies', 'Leadership', 'Scholarship', 'Camp-outs', 'Uniform', 'Only for younger girls', 'Only for older girls', 'Community conscious', 'Untrusting', 'Trusting', 'Forward-thinking', 'Stuck in the past']"
                       placeholder="Select first option" v-model="answers[4]"></select-menu>

          <select-menu
              :options="['Crafts', 'STEM', 'College prep', 'Cookies', 'Leadership', 'Scholarship', 'Camp-outs', 'Uniform', 'Only for younger girls', 'Only for older girls', 'Community conscious', 'Untrusting', 'Trusting', 'Forward-thinking', 'Stuck in the past']"
              placeholder="Select second option" v-model="answers[5]"></select-menu>

          <select-menu
              :options="['Crafts', 'STEM', 'College prep', 'Cookies', 'Leadership', 'Scholarship', 'Camp-outs', 'Uniform', 'Only for younger girls', 'Only for older girls', 'Community conscious', 'Untrusting', 'Trusting', 'Forward-thinking', 'Stuck in the past']"
              placeholder="Select third option" v-model="answers[6]"></select-menu>

          <select-menu label="Do you feel the girl scouts can contribute to your specific community?"
                       :options="['Yes', 'No', 'I have not thought about it']"
                       placeholder="Select an option" v-model="answers[7]"></select-menu>

          <select-menu label="Biggest challenge the youth in your community faces"
                       :options="['Low high school graduation rate', 'High teenage birth rate', 'Economically disadvantaged', 'Not enough affordable after school activities']"
                       placeholder="Select an option" v-model="answers[7]"></select-menu>

          <text-input label="Zip Code" v-model="answers[9]"></text-input>

          <div class="flex justify-end">
            <button class="bg-green-500 font-bold shadow-gray-500 shadow uppercase px-5 py-2 rounded-lg"
                    @click="save_answers">Save
            </button>
          </div>

        </div>

      </div>
    </div>
  </main>
</template>
