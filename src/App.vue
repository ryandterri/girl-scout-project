<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {ChevronDownIcon} from '@heroicons/vue/24/solid'
import Authentication from '@/composables/Authentication'
import {onMounted, ref} from 'vue'
import detect_outside_click from '@/composables/detect_outside_click'
import {supabase} from '@/lib/supabase_client'

const {is_authenticated, user} = Authentication()

const profile_menu = ref(null)
const profile_menu_open = ref(false)

const notifications = ref(null)
const notifications_menu_open = ref(false)

detect_outside_click(profile_menu, () => {
  profile_menu_open.value = false
  notifications_menu_open.value = false
})

const logout = () => {
  supabase.auth.signOut()
}

</script>

<template>


  <!--  <div class="text-black bg-gs-green text-center text-xl p-3">-->
  <!--    <strong>LET'S GO!</strong> Troops are forming right now. Be a Girl Scout&#45;&#45; JOIN TODAY-->
  <!--  </div>-->

  <nav class="bg-white">
    <div class="mx-auto max-w-full lg:max-w-7xl">
      <div class="flex justify-between py-4 px-3">
        <div class="flex flex-col justify-center">
        <img class="h-14 text-white" src="/img/gsnetx-green.png" alt="gsnetx"/>
        </div>
        <div class="flex flex-col gap-4">
          <ul class="flex gap-10">
            <li class="hidden lg:block">
              <button class="bg-orange-500 rounded-lg px-7 py-0.5 text-xl">SHOP</button>
            </li>
            <li class="hidden lg:block">
              <button class="bg-gs-green rounded-lg px-4 py-0.5 text-xl">DONATE</button>
            </li>
            <li class="hidden lg:block">
              <img src="/img/my-gs.png" class="h-8 cursor-pointer"/>
            </li>
            <li class="flex gap-6">
              <img src="/img/gs-search.png" class="h-8 cursor-pointer"/>
            </li>
            <li class="hidden lg:block">
              <img src="/img/gs-pin.png" class="h-8 cursor-pointer"/>
            </li>
            <li class="flex gap-6">
              <img src="/img/gs-menu.png" class="h-8 cursor-pointer"/>
            </li>
            <li class="hidden lg:block">
              <img src="/img/gs-es.png" class="h-8 cursor-pointer"/>
            </li>
          </ul>
          <ul class="gap-5 text-lg pt-5 hidden lg:flex">
            <li class="flex gap-2 items-center">
              <div class="border-white border-b-2 hover:border-green-900">Discover</div>
              <chevron-down-icon class="h-6"></chevron-down-icon>
            </li>
            <li class="flex gap-2 items-center">
              <div class="border-white border-b-2 hover:border-green-900">Get Involved</div>
              <chevron-down-icon class="h-6"></chevron-down-icon>
            </li>
            <li class="flex gap-2 items-center">
              <div class="border-white border-b-2 hover:border-green-900">Cookies</div>
              <chevron-down-icon class="h-6"></chevron-down-icon>
            </li>
            <li class="flex gap-2 items-center">
              <div class="border-white border-b-2 hover:border-green-900">Support Us</div>
              <chevron-down-icon class="h-6"></chevron-down-icon>
            </li>
            <li class="flex gap-2 items-center">
              <div class="border-white border-b-2 hover:border-green-900">Members</div>
              <chevron-down-icon class="h-6"></chevron-down-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>


  <RouterView/>

</template>

<style scoped>
</style>
