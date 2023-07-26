<template>
  <div class="w-full overflow-hidden relative">
    <div class="relative w-full bg-orange-400 bg-opacity-60 rounded-lg h-full">
      <div class="absolute w-[600px] h-[600px] -top-52 -left-44 rounded-full bg-gradient-radial circle"></div>
      <div class="absolute w-[200px] h-[200px] top-96 -left-8 rounded-full bg-gradient-radial circle2"></div>
      <div class="absolute w-[1700px] h-[1700px] -top-[1200px] -right-[200px] rounded-full bg-gradient-radial circle3">
      </div>
      <div class="absolute w-[200px] h-[200px] top-4 right-[500px] rounded-full bg-gradient-radial circle2"></div>
      <div class="absolute w-[600px] h-[600px] top-40 -right-96 rounded-full bg-gradient-radial circle4"></div>
    </div>
    <div class="absolute w-[1700px] h-[1700px] -bottom-[1430px] -right-[200px] rounded-full bg-gradient-radial circle3">
    </div>
    <div class="absolute w-[200px] h-[200px] bottom-20 right-36 rounded-full bg-gradient-radial circle"></div>
    <div class="absolute w-[400px] h-[400px] -bottom-20 -left-20 rounded-full bg-gradient-radial circle2"></div>

    <div class="z-50 w-full pt-5" style="backdrop-filter: blur(20px);">
      <img src="./../assets/img/Rectangle4.png" alt="" class="absolute -z-20 top-0">
      <img src="./../assets/img/Group2213.png" alt="" class="absolute right-10 top-32">
      <img src="./../assets/img/Group2214.png" alt="" class="absolute left-14 top-[52em]">
      <div class="flex justify-between z-10 items-center shadow-xl mx-28 px-6 py-3 h-16 bg-white rounded-xl">
        <img src="./../assets/img/LogoSPEAK-UPMendatar.png" alt="" class="h-full">
        <div class="flex items-center text-md gap-6" style="font-family: 'K2D';">
          <RouterLink to="/" class="text-[#9D4CDC]">Home</RouterLink>
          <RouterLink to="/konsultasi">Konsultasi</RouterLink>
          <a href="#">Video</a>
          <a href="#">Game</a>
          <a href="#">Laporan</a>
          <RouterLink to="/masuk"><img src="./../assets/img/Frame13.png" alt=""></RouterLink>
        </div>
      </div>
      <div class="mx-28 w-4/12 mt-36">
        <p style="font-family: 'Londrina Solid', cursive;" class="text-6xl text-[#330656]">Belajar Berbicara di Depan
          Umum?
          <span class="text-orange-400">Seru!</span>
        </p>
        <p class="text-lg mt-5 text-[#330656]" style="font-family: 'K2D';">Siapa bilang belajar harus membosankan? Belajar
          berbicara di depan umum dapat menjadi petualangan yang menyenangkan</p>
        <div class="flex items-center gap-10 mt-28">
          <p class="bg-orange-400 w-fit text-white px-6 py-2 rounded-xl">Daftar Sekarang</p>
          <img src="./../assets/img/Frame5.png" alt="">
        </div>
      </div>
      <div class="flex justify-end">
        <div class="mx-28 w-4/12 mt-64 float-right">
          <p style="font-family: 'Londrina Solid', cursive;" class="text-6xl text-[#330656]">Proses Belajar yang Seru,
            bisa
            sambil bermain!
          </p>
          <p class="text-lg mt-5 text-[#330656]" style="font-family: 'K2D';">Games yang dirancang khusus untuk membantu
            kamu
            mengembangkan keterampilan berbicara di depan umum dengan cara yang menyenangkan</p>
        </div>
      </div>
      <div class="mx-28 mt-64 flex flex-col items-center gap-6">
        <div class="flex gap-5 items-center">
          <img src="./../assets/img/logoo.png" alt="">
          <p style="font-family: 'Londrina Solid', cursive;" class="text-5xl text-[#330656]">Fitur-fitur</p>
        </div>
        <div class="grid grid-cols-4 gap-6">
          <div v-for="index in 4"
            class="border-[0.4em] rounded-xl border-[#330656] flex flex-col gap-2 items-center px-4 text-center py-6">
            <img src="./../assets/img/ph_video.png" alt="">
            <p style="font-family: 'Londrina Solid', cursive;" class="text-3xl text-orange-400">Materi Video</p>
            <p style="font-family: 'K2D';" class="text-md text-[#330656]">Membantu kamu dalam proses belajar berbicara di
              depan umum dengan mudah dan seru</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 items-center mt-24">
        <p style="font-family: 'Londrina Solid', cursive;" class="text-5xl text-[#330656]">Play Game</p>
        <p style="font-family: 'K2D';">Coba mainkan permainan buah-buahan dibawah ini dan klik “Mulai Game”</p>
        <div class="bg-[#4B2D62] px-4 py-3 rounded-2xl flex flex-col gap-2 items-center">
          <img src="./../assets/img/image4.png" alt="">
          <p class="bg-[#330656] rounded-xl px-6 py-8 text-white text-center w-full">Kelompokkan buah-buahan diatas sesuai
            dengan nama yang tersedia</p>
          <button class="bg-orange-400 px-5 py-1.5 text-center w-fit rounded-xl text-white">Mulai game</button>
        </div>
      </div>
      <div class="flex px-28 gap-10 mt-28 pb-40">
        <div class="flex flex-col">
          <p style="font-family: 'Londrina Solid', cursive;" class="text-5xl">Buruan selesaikan tugas harian dan dapatkan
            hadiah</p>
          <p style="font-family: 'K2D';" class="">Kumpulkan point disetiap tugas yang sudah dikerjakan dan tukarkan dengan
            hadiah yang menarik dari mentor-mentor </p>
        </div>
        <img src="./../assets/img/logoo.png" alt="" class="w-24">
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
  
<style scoped>
.circle {
  background-image: radial-gradient(circle, rgba(139, 48, 213, 0.6) 0%, transparent 80%);
}

.circle2 {
  background-image: radial-gradient(circle, rgba(255, 181, 34, 0.8) 0%, transparent 80%);
}

.circle3 {
  background-image: radial-gradient(circle, rgba(139, 48, 213, 0.3) 0%, transparent 80%);
}

.circle4 {
  background-image: radial-gradient(circle, rgba(255, 181, 34, 0.4) 0%, transparent 80%);
}
</style>