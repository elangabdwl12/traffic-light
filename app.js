// ==========================================
// 1. STATUS MESIN (GLOBAL VARIABLE)
// ==========================================
let isRunning = false;

// ==========================================
// 2. DEFINISI ELEMEN (VARIABEL)
// ==========================================

// --- Lampu & Tombol MERAH ---
const lampuMerah = document.getElementById("merah");
const tombolStop = document.getElementById("btn-stop");
const angkaMerah = document.getElementById("timer-merah");

// --- Lampu & Tombol KUNING ---
const lampuKuning = document.getElementById("kuning");
const tombolWait = document.getElementById("btn-wait");
const angkaKuning = document.getElementById("timer-kuning");

// --- Lampu & Tombol HIJAU ---
const lampuHijau = document.getElementById("hijau");
const tombolGo = document.getElementById("btn-go");
const angkaHijau = document.getElementById("timer-hijau");

// --- Tombol Kontrol Lainnya ---
const tombolReset = document.getElementById("btn-reset");
const tombolAll = document.getElementById("btn-auto");

// ==========================================
// 3. EVENT LISTENER TOMBOL MANUAL (INTERLOCK)
// ==========================================

tombolStop.addEventListener("click", () => {
  if (isRunning == true) {
    alert("Mode Otomatis sedang jalan! Klik 'Matikan Semua' dulu.");
    return;
  }

  lampuMerah.classList.toggle("active");

  lampuKuning.classList.remove("active");
  lampuHijau.classList.remove("active");

  angkaKuning.innerText = "";
  angkaHijau.innerText = "";
});

tombolWait.addEventListener("click", () => {
  if (isRunning == true) {
    alert("Mode Otomatis sedang jalan! Klik 'Matikan Semua' dulu.");
    return;
  }

  lampuKuning.classList.toggle("active");

  lampuMerah.classList.remove("active");
  lampuHijau.classList.remove("active");

  angkaMerah.innerText = "";
  angkaHijau.innerText = "";
});

tombolGo.addEventListener("click", () => {
  if (isRunning == true) {
    alert("Mode Otomatis sedang jalan! Klik 'Matikan Semua' dulu.");
    return;
  }

  lampuHijau.classList.toggle("active");

  lampuMerah.classList.remove("active");
  lampuKuning.classList.remove("active");

  angkaMerah.innerText = "";
  angkaKuning.innerText = "";
});

// ==========================================
// 4. EVENT LISTENER TOMBOL RESET
// ==========================================
tombolReset.addEventListener("click", () => {
  // 1. Matikan status mesin
  isRunning = false;

  // 2. Matikan semua lampu visual
  lampuMerah.classList.remove("active");
  lampuKuning.classList.remove("active");
  lampuHijau.classList.remove("active");

  // 3. Hapus angka timer seketika
  angkaMerah.innerText = "";
  angkaKuning.innerText = "";
  angkaHijau.innerText = "";
});

// ==========================================
// 5. FUNGSI BANTUAN: HITUNG MUNDUR (TIMER)
// ==========================================
function hitungMundur(elementAngka, waktuAwal) {
  // Tampilkan angka awal
  elementAngka.innerText = waktuAwal;

  let sisaWaktu = waktuAwal;

  const interval = setInterval(() => {
    // Safety Check: Kalau di-Reset di tengah jalan, stop timer!
    if (isRunning == false) {
      clearInterval(interval);
      elementAngka.innerText = "";
      return;
    }

    sisaWaktu--; // Kurangi waktu

    // Tulis angka baru ke layar
    elementAngka.innerText = sisaWaktu;

    // Kalau waktu habis (0), hentikan interval & hapus angka
    if (sisaWaktu <= 0) {
      clearInterval(interval);
      elementAngka.innerText = "";
    }
  }, 1000); // Jalan setiap 1000ms (1 detik)
}

// ==========================================
// 6. FUNGSI UTAMA: MESIN OTOMATIS
// ==========================================
function putarLampu() {
  // Pintu Masuk: Kalau mesin mati, jangan lanjut
  if (isRunning == false) return;

  // --- FASE 1: MERAH NYALA (10 Detik) ---
  lampuMerah.classList.add("active");
  lampuKuning.classList.remove("active");
  lampuHijau.classList.remove("active");
  hitungMundur(angkaMerah, 10); // Timer 10 detik

  setTimeout(() => {
    // Cek Darurat
    if (isRunning == false) return;

    // --- FASE 2: KUNING NYALA (8 Detik) ---
    lampuKuning.classList.add("active");
    lampuMerah.classList.remove("active");
    hitungMundur(angkaKuning, 10); // Timer 8 detik

    setTimeout(() => {
      // Cek Darurat
      if (isRunning == false) return;

      // --- FASE 3: HIJAU NYALA (10 Detik) ---
      lampuHijau.classList.add("active");
      lampuKuning.classList.remove("active");
      hitungMundur(angkaHijau, 10); // Timer 10 detik

      // --- LOOPING (ULANGI LAGI) ---
      setTimeout(() => {
        // Cek dulu sebelum mengulang, siapa tau sudah di-Reset
        if (isRunning == true) {
          putarLampu(); // Panggil diri sendiri
        }
      }, 10000); // Tunggu Hijau selesai (10000ms)
    }, 10000); // Tunggu Kuning selesai (8000ms)
  }, 10000); // Tunggu Merah selesai (10000ms)
}

// ==========================================
// 7. EVENT LISTENER TOMBOL AUTO
// ==========================================
tombolAll.addEventListener("click", () => {
  // Anti-Spam: Kalau sudah jalan, jangan jalankan lagi
  if (isRunning == true) {
    return;
  }

  // Nyalakan mesin
  isRunning = true;
  putarLampu();
});
