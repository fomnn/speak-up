<template>
    <div class="flex items-center justify-between h-screen pl-28">
        <div class="border border-stone-400 rounded-xl flex flex-col gap-3 w-5/12 px-8 py-10">
            <RouterLink to="/"><img src="./../assets/img/LogoSPEAK-UPMendatar.png" alt="" class="w-48"></RouterLink>
            <p style="font-family: 'Londrina Solid', cursive;" class="text-3xl">Silahkan Daftar</p>
            <div class="flex flex-col gap-2">
                <div class="">
                    <p style="font-family: 'K2D';">Nama lengkap</p>
                    <input type="text" class="border border-stone-400 rounded-lg w-full mt-2 py-2 px-3" placeholder="Masukkan nama lengkap">
                </div>
                <div class="">
                    <p style="font-family: 'K2D';">Nomor whatsapp</p>
                    <input type="text" class="border border-stone-400 rounded-lg w-full mt-2 py-2 px-3" placeholder="Masukkan nomor whatsapp">
                </div>
                <div class="">
                    <p style="font-family: 'K2D';">Kata sandi</p>
                    <input type="password" class="border border-stone-400 rounded-lg w-full mt-2 py-2 px-3" placeholder="Masukkan kata sandi">
                </div>
                <div class="">
                    <p style="font-family: 'K2D';">Ulangi kata sandi</p>
                    <input type="password" class="border border-stone-400 rounded-lg w-full mt-2 py-2 px-3" placeholder="Masukkan ulang kata sandi">
                </div>
                <a href="#" class="text-right text-orange-400" style="font-family: 'K2D';">Lupa kata sandi</a>
                <button style="font-family: 'K2D';" class="bg-orange-400 text-white py-1.5 shadow-md rounded-lg">Masuk</button>
            </div>
            <div class="flex">
                <p style="font-family: 'K2D';">Sudah punya akun?</p>
                <RouterLink to="/masuk" style="font-family: 'K2D';" class="text-orange-400 ml-2">Masuk sekarang</RouterLink>
            </div>
        </div>
        <img src="./../assets/img/image_7-removebg-preview1.png" alt="" class="w-[48rem]">
    </div>
</template>

<script setup>

</script>