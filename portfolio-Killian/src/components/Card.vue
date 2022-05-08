<script setup lang="ts">
</script>

<script lang="ts">
export default {
  name:'Card'
}
</script>

<template>
    <div class="bg-gradient-to-r from-fuchsia-400 via-rose-300 to-orange-300 h-screen">
    <div class="flex justify-center">
        <div class="bg-gray-200  text-shadow-xl bg-opacity-40 min-w-[1300px] mt-26">
          <h1 class="mt-3 text-6xl text-stroke-2">Killian Zouareg</h1>
          <p class="text-stroke-1">Apprentice Developer</p>
          <hr>
          <h2 class="mt-3 text-4xl text-stroke-2">Now I am doing this.</h2>
          <p class="text-strok-1">While studying at ForEach Academy <br> I'm working as an apprentice developer at Vade</p>
          <h3 class="mt-3 text-4xl text-stroke-2 mt-25">Contact</h3>
          <p class="text-stroke-1">Reach out anytime</p>
          <p> I am easily reachable via.....</p>
          <v-btn class="hover:text-white cursor-pointer">EMAIL</v-btn>
          <br>
          <v-btn class="hover:text-white cursor-pointer">LINKEDIN</v-btn>
          <hr>
        </div>
    </div>
  </div>
</template>
