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

    <div class="z-50 w-full pt-5" style="backdrop-filter: blur(20px);">
      <img src="./../assets/img/Rectangle4.png" alt="" class="absolute -z-20 top-0">
      <img src="./../assets/img/image_5-removebg-preview1.png" alt="" class="absolute w-[36em] right-28 top-52">
      <img src="./../assets/img/image_5__4_-removebg-preview1.png" alt="" class="absolute left-14 top-[77em]">
      <img src="./../assets/img/image_8-removebg-preview1.png" alt="" class="absolute w-[40em] left-14 top-[112em]">

      <div class="flex justify-between z-10 items-center shadow-xl mx-28 px-6 py-3 h-16 bg-white rounded-xl">
        <img src="./../assets/img/LogoSPEAK-UPMendatar.png" alt="" class="h-full">
        <div class="flex items-center text-md gap-6" style="font-family: 'K2D';">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/konsultasi" class="text-[#9D4CDC]">Konsultasi</RouterLink>
          <a href="#">Video</a>
          <a href="#">Game</a>
          <a href="#">Laporan</a>
          <RouterLink to="/masuk"><img src="./../assets/img/Frame13.png" alt=""></RouterLink>
        </div>
      </div>
      <div class="mx-28 w-5/12 mt-36">
        <p style="font-family: 'Londrina Solid', cursive;" class="text-6xl text-[#330656]">Konsultasi mudah dengan
          <span class="text-orange-400">Mentor terbaik!</span>
        </p>
        <p class="text-lg mt-5 text-[#330656]" style="font-family: 'K2D';">Mentor yang berpengalaman dalam berbicara di
          depan umum, siap untuk mendengarkan, memberikan saran, dan mengevaluasi kemampuan kamu</p>
        <div class="flex items-center gap-10 mt-28">
          <RouterLink to="#" class="bg-orange-400 transition-all hover:shadow-lg duration-200 ease-in w-fit text-white px-6 py-2 rounded-xl">Konsultasi Sekarang</RouterLink>
          <button><img src="./../assets/img/Frame5fds.png" alt="" class="hover:shadow-lg rounded-xl transition-all duration-200 ease-in"></button>
        </div>
      </div>
      <div class="flex flex-col mx-28 mt-60 gap-10">
        <p style="font-family: 'Londrina Solid', cursive;" class="text-4xl text-center text-[#330656]">Bagaimana Cara
          Konsultasi dengan Mentor?</p>
        <img src="./../assets/img/Group2215.png" alt="" class="px-8 pl-12">
        <div class="flex justify-between -mt-16">
          <div class="flex flex-col items-center text-center" v-for="index in 4">
            <p class="font-medium text-lg" style="font-family: 'K2D';">1. Cari Mentor</p>
            <p class="" style="font-family: 'K2D';">Pilih mentor pilihanmu</p>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="mx-28 w-5/12 mt-64 float-right">
          <p class="text-lgtext-[#330656]" style="font-family: 'K2D';">Tentang Mentor Kami</p>
          <p style="font-family: 'Londrina Solid', cursive;" class="text-6xl text-[#330656] mt-5">Percayakan Anak Anda
            dengan Mentor Kami</p>
          <p class="text-lg mt-5 text-[#330656]" style="font-family: 'K2D';">Mentor yang peduli dan berdedikasi untuk
            membantu anak Anda mencapai potensi terbaik mereka</p>
            <!-- <RouterLink to="#" class="bg-orange-400 transition-all mt-10 hover:shadow-lg duration-200 ease-in w-fit text-white px-6 py-2 rounded-xl">Lihat Mentor</RouterLink> -->
          <button class="bg-orange-400 w-fit text-white px-6 py-2 rounded-xl mt-10">Lihat Mentor</button>
        </div>
      </div>
      <div class="mt-40 flex justify-end mx-20">
        <div class="w-5/12 flex flex-col gap-2">
          <p style="font-family: 'K2D';" class="text-3xl">Form Penjadwalan Konsultasi</p>
          <p style="font-family: 'K2D';" class="">Jadwalkan konsultasi dengan mentor untuk melatih dan mengevaluasi
            kemampuan berbicara di depan umum</p>
          <form>
            <div class="flex flex-col gap-3">

              <div class="" v-for="(inputForm1, index) in inputForm">
                <p style="font-family: 'K2D';" class="mb-1">{{ inputForm1[0] }}</p>
                <textarea name="" id="" cols="30" rows="3" v-if="inputForm1[0] == 'Permasalahan'"
                  class="border border-stone-300 w-full resize-none rounded-md text-sm px-2 py-3"
                  :placeholder="inputForm1[2]"></textarea>
                <input v-else :type="inputForm1[1]" class="border border-stone-300 w-full rounded-md px-2 py-3 text-sm"
                  :placeholder="inputForm1[2]">
              </div>
            </div>
            <button style="font-family: 'K2D';"
              class="bg-orange-400 w-fit text-white px-6 py-2 rounded-xl mt-10 float-right">Kirim</button>
          </form>
        </div>
      </div>
      <div class="mx-28 flex flex-col gap-2">
        <p style="font-family: 'Londrina Solid', cursive;" class="text-3xl">Daftar Mentor Terbaik</p>
        <div class="flex justify-between">
          <p style="font-family: 'K2D';">Mereka dapat membantu Anda mencapai kemudahan dalam berbicara di depan umum.</p>
          <a href="" style="font-family: 'K2D';"
            class="font-medium text-lg text-orange-400 underline underline-offset-1">Lihat semua mentor</a>
        </div>
        <div class="grid grid-cols-5 gap-5">
          <div class="" v-for="index in 5">
            <img src="./../assets/img/Group2216.png" alt="" class="w-full">
            <p style="font-family: 'K2D';" class="text-lg font-bold">Sofiyatun Hasanah</p>
            <p style="font-family: 'K2D';" class="text-sm">Professional MC and Moderator</p>
            <div class="">
              <img src="" alt="">
              <p style="font-family: 'K2D';" class="text-sm">4.8 (1345 Reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div class=" mx-28 flex flex-col mt-28 gap-16 mb-32 items-center">
        <div class="justify-center gap-10 relative">
          <button @click="testiSlideLeft" v-if="letakShape > 0" class="absolute -left-[3rem] top-1.5"><img src="./../assets/img/arrow.png" alt=""></button>
          <p style="font-family: 'Londrina Solid', cursive;" class="text-3xl items-center">Apa Kata Mereka</p>
          <button @click="testiSlideRight" v-if="letakShape < tesNama2.length-3" class="absolute -right-[3rem] top-1.5"><img src="./../assets/img/arrow.png" alt="" class="rotate-180"></button>
        </div>
        <div class="flex gap-2 -mt-10">
          <div class="w-2 h-2  rounded-full" v-for="index in 3" :class="index == letakShape+1 ? 'bg-orange-500':'bg-slate-500'"></div>
        </div>


        <div class="relative h-[100rem] w-full">
          <div 
            class="absolute transition-all duration-300 ease-in-out top-0"
            :class="item.letak[letakShape]"
            v-for="(item, index) in tesNama2" 
            :key="index"
            
            >
            <img :src="'./../src/assets/img/' + item.shape" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute top-2 left-[10rem]">
            <div 
              class="absolute flex flex-col items-center text-center w-9/12"
              :class="item.letakText">
              <p style="font-family: 'K2D';" class="text-lg font-bold">{{ item.
              nama }}</p>
              <p style="font-family: 'K2D';" class="">{{ item.jabatan }}</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-sm">Mentor memberikan umpan balik konstruktif yang membantu saya
                meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di
                platform, seperti games pembelajaran.</p>
            </div>
          </div>
        </div>

        <!-- <div class="relative h-[100rem] w-full">
          <div class="relative -left-2">
            <img src="./../assets/img/Group2219.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute top-2 left-[10rem]">
            <div class="absolute top-[6rem] left-[4rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-lg font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-sm">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
          <div class="relative transition-all duration-300 ease-in-out left-1/3 -top-[24rem]" :class="tes">
            <img src="./../assets/img/Group2217.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute w-28 -top-10 left-[10rem]">
            <div class="absolute top-[6.5rem] left-[3.5rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-xl font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="text-lg">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-lg">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
          <div class="relative -top-[52rem] left-[56rem]">
            <img src="./../assets/img/Group2218.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute top-4 left-[6rem]">
            <div class="absolute top-[6.5rem] left-[1.7rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-lg font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-sm">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
        </div> -->


        <!-- <div class="flex justify-between gap-5">
          <div class="relative">
            <img src="./../assets/img/Group2219.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute top-2 left-[10rem]">
            <div class="absolute top-[6rem] left-[4rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-lg font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-sm">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
          <div class="relative transition-all duration-300 ease-in-out" :class="tes">
            <img src="./../assets/img/Group2217.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute w-28 -top-10 left-[10rem]">
            <div class="absolute top-[6.5rem] left-[3.5rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-xl font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="text-lg">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-lg">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
          <div class="relative">
            <img src="./../assets/img/Group2218.png" alt="">
            <img src="./../assets/img/Ellipse17.png" alt="" class="absolute top-4 left-[6rem]">
            <div class="absolute top-[6.5rem] left-[1.7rem] flex flex-col items-center text-center w-9/12">
              <p style="font-family: 'K2D';" class="text-lg font-bold">Sarah Praditya</p>
              <p style="font-family: 'K2D';" class="">Kepala Managerial Internal MTO</p>
              <img src="./../assets/img/Group2220.png" alt="">
              <p style="font-family: 'K2D';" class="text-sm">Mentor memberikan umpan balik konstruktif yang membantu saya meningkatkan kemampuan public speaking saya. Saya juga senang dengan fitur-fitur interaktif yang ada di platform, seperti games pembelajaran.</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div class=""></div>
</template>

<script setup>
import { computed, ref } from 'vue';

let inputForm = [
  ['Nama Lengkap', 'text', 'Masukkan Nama Lengkap '],
  ['Nomor Whatsapp', 'text', 'Masukkan Nomor Whatsapp'],
  ['Usia', 'number', 'Masukkan Usia Pemohon'],
  ['Tanggal Konsultasi', 'date', 'Masukkan Tanggal Konsultasi yang diinginkan'],
  ['Jam Konsultasi', 'datetime', 'Masukkan Jam Konsultasi yang diinginkan'],
  ['Permasalahan', 'text', 'Masukkan Permasalahan yang ingin dikonsultasikan']
]

let tesNama2 = [
  {
    nama: 'Sarah Praditya', 
    jabatan: 'Kepala Managerial Internal MTO',
    shape: 'Group2219.png', 
    letak: ['translate-x-[3rem] scale-75', '-translate-x-[40rem]', '-translate-x-[40rem]'],
    letakText: 'top-[6rem] left-[4rem]'
  }, 
  {
    nama: 'Agustin Putri', 
    jabatan: 'BA of Emina Cosmetic',
    shape: 'Group2217.png', 
    letak: ['translate-x-[27rem] top-2 w-[22rem] scale-[1.10]', 'translate-x-16 top-2 w-[22rem] scale-75', '-translate-x-[40rem]'],
    letakText: 'top-[6rem] left-[3.2rem]'
  }, 
  {
    nama: 'Syifa Hanna', 
    jabatan: 'Mahasiswi di Telkom University',
    shape: 'Group2218.png', 
    letak: ['translate-x-[53rem] scale-75', 'translate-x-[27rem] scale-[1.10]', 'translate-x-[5rem] top-2 w-[22rem] scale-75'],
    letakText: 'top-[6rem] left-[2rem]'
  },
  {
    nama: 'Asep', 
    jabatan: 'Mahasiswi di Telkom University',
    shape: 'Group2219.png', 
    letak: ['translate-x-[90rem] scale-75', 'translate-x-[48rem] scale-75 -translate-y-2', 'translate-x-[27rem] scale-[1.10]'],
    letakText: 'top-[6rem] left-[4rem]'
  },
  {
    nama: 'Tatang', 
    jabatan: 'Mahasiswi di Telkom University',
    shape: 'Group2217.png', 
    letak: ['translate-x-[90rem] scale-75', 'translate-x-[90rem] scale-75', 'translate-x-[48rem] scale-[0.65]'],
    letakText: 'top-[6rem] left-[4rem]'
  },
]

var indexSekarang = ref(0)

var letakShape = computed(() => {
  console.log(indexSekarang.value)
  return parseInt(indexSekarang.value)
  
})

var tes = ref('')

function testiSlideRight() {
  indexSekarang.value++
  console.log(indexSekarang.value)
}
function testiSlideLeft() {
  indexSekarang.value--
  console.log(indexSekarang.value)
}
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
}</style>