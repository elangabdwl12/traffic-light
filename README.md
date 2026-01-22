# Project Traffic Light JS 🚦

Halo! 👋 Ini adalah mini-project yang saya buat untuk melatih logika pemrograman JavaScript (Vanilla JS).

Tujuan project ini adalah mensimulasikan logika lampu lalu lintas, mulai dari pengaturan waktu (timer), manipulasi DOM, hingga logika pengaman agar tombol tidak tabrakan.

🔗 **Coba Mainkan di sini:** [https://elangabdwl12.github.io/traffic-light-js/](https://elangabdwl12.github.io/traffic-light/)

## Apa saja fiturnya? ✨

Project ini punya dua mode utama:

### 1. Mode Manual 🎮
* Kita bisa menyalakan lampu Merah, Kuning, atau Hijau secara manual dengan tombol.
* **Fitur Pintar:** Saya menambahkan logika supaya kalau satu lampu nyala, lampu lainnya otomatis mati. Jadi tidak akan "tabrakan" (nyala barengan).

### 2. Mode Otomatis 🤖
* Lampu akan berjalan sendiri secara bergantian (Looping).
* Durasi waktunya saya set serealistis mungkin:
    * 🔴 Merah: 10 Detik
    * 🟡 Kuning: 8 Detik
    * 🟢 Hijau: 10 Detik
* **Countdown Timer:** Ada angka hitung mundur di tengah lampu biar tahu sisa waktunya.

### 3. Fitur Pengaman (Logic) 🛡️
* **Anti-Bug:** Saat mode otomatis jalan, tombol manual saya kunci (disable) supaya sistemnya tidak error/tabrakan.
* **Tombol Reset:** Untuk mematikan semua mesin, timer, dan lampu seketika.

## Teknologi yang Dipakai 🛠️
* **HTML:** Untuk kerangka website.
* **Tailwind CSS:** Untuk styling tombol dan layout biar rapi dan responsif.
* **JavaScript:** Murni JavaScript (tanpa Framework) untuk menangani logika `setTimeout`, `setInterval`, dan DOM Event.

*Project ini adalah bagian dari perjalanan saya belajar JavaScript dari nol (Zero to Hero).* 🚀
