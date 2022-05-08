<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';

const router = useRouter()

</script>

<script lang="ts">
export default {
  name:'Card'
}
</script>

<template>
    <div class="bg-gradient-to-r from-fuchsia-400 via-rose-300 to-orange-300 h-screen">
    <div class="flex justify-center">
        <div class="text-shadow-xl bg-opacity-40 min-w-[1300px] mt-26">
          <h1 class="mt-3 text-6xl text-stroke-2">Killian Zouareg</h1>
          <p class="text-stroke-1">Apprentice Developer</p>


          <h2 class="mt-3 text-4xl text-stroke-2 mt-13">What I did...</h2>
          <p class="text-stroke-1"> 2 months internship as a web developer at Symbol-IT</p>


          <h2 class="mt-3 text-4xl text-stroke-2 mt-13">Now I am doing this.</h2>
          <p class="text-stroke-1">While studying at ForEach Academy <br> I'm working as an apprentice developer at Vade</p>


          <h3 class="mt-3 text-4xl text-stroke-2 mt-13">Contact</h3>
          <p class="text-stroke-1">Reach out anytime</p>


          <p> I am easily reachable via.....</p>
          <button class="hover:text-white cursor-pointer"><a href = "mailto: killian.zouareg@gmail.com">EMAIL</a></button>
          <br>
          <button class="hover:text-white cursor-pointer"> <a href="https://fr.linkedin.com/in/killian-zouareg-0b544b1b8">LINKEDIN</a></button>
        </div>
    </div>
  </div>
</template>
