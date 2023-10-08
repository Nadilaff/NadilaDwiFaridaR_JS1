function cekNilai() {
    var inputNilai = document.getElementById("nilaiInput").value;
    var nilai = parseInt(inputNilai);
    // Memeriksa kondisi dengan if-else
    if (!isNaN(nilai)) {
        if (nilai >= 80) {
            document.getElementById("hasilNilai").innerHTML = "Selamat! Anda lulus dengan nilai A";
        } else if (nilai >= 70) {
            document.getElementById("hasilNilai").innerHTML = "Anda lulus dengan nilai B";
        } else if (nilai >= 60) {
            document.getElementById("hasilNilai").innerHTML = "Anda lulus dengan nilai C";
        } else {
            document.getElementById("hasilNilai").innerHTML = "Anda tidak lulus. Silakan coba lagi.";
        }
    } else {
        document.getElementById("hasilNilai").innerHTML = "Masukkan nilai yang valid.";
    }
}

function cekAngka() {
    var inputAngka = document.getElementById("inputAngka").value;
    var angka = parseInt(inputAngka);
    // Memeriksa kondisi dengan nested if
    if (!isNaN(angka)) {
        if (angka > 0) {
            document.getElementById("hasilAngka").innerHTML = "Angka yang dimasukkan positif.";
        } else {
            if (angka < 0) {
                document.getElementById("hasilAngka").innerHTML = "Angka yang dimasukkan negatif.";
            } else {
                document.getElementById("hasilAngka").innerHTML = "Angka yang dimasukkan adalah nol.";
            }
        }
    } else {
        document.getElementById("hasilAngka").innerHTML = "Masukkan angka yang valid.";
    }
}

function tampilkanHari() {
    var selectHari = document.getElementById("hari");
    var hari = selectHari.value;
    var hasilPesan = document.getElementById("hasil");
    // Menggunakan pernyataan switch-case untuk menentukan hari
    switch (hari) {
        case "senin":
            hasilPesan.textContent = "Hari ini adalah Senin.";
            break;
        case "selasa":
            hasilPesan.textContent = "Hari ini adalah Selasa.";
            break;
        case "rabu":
            hasilPesan.textContent = "Hari ini adalah Rabu.";
            break;
        case "kamis":
            hasilPesan.textContent = "Hari ini adalah Kamis.";
            break;
        case "jumat":
            hasilPesan.textContent = "Hari ini adalah Jumat.";
            break;
        case "sabtu":
            hasilPesan.textContent = "Hari ini adalah Sabtu.";
            break;
        case "minggu":
            hasilPesan.textContent = "Hari ini adalah Minggu.";
            break;
        default:
            hasilPesan.textContent = "Pilihan tidak valid.";
            break;
    }
}

var outputElement = document.getElementById("output");
for (var i = 1; i <= 12; i++) {
    // Membuat teks yang akan ditambahkan ke elemen <p>
    var text = "bulan ke-" + i;
    var paragraph = document.createElement("p");
    // Menambahkan teks ke elemen paragraf
    paragraph.textContent = text;
    // Menambahkan elemen paragraf ke dalam elemen output
    outputElement.appendChild(paragraph);
}

function hitungPengisian() {
    var jarak = parseInt(document.getElementById("jarak").value);
    var kapasitas = parseInt(document.getElementById("kapasitas").value);
    var isi = 0;
    var jarakPerLiter = 10; // Jarak per liter bahan bakar
    while (isi * jarakPerLiter < jarak) {
        isi++;
    }
    document.getElementById("hasilPengisian").innerHTML = "Anda harus mengisi bahan bakar sebanyak " + isi + " kali.";
}

function hitungWaktu() {
    var jarakTempuh = parseInt(document.getElementById("jarakTempuh").value);
    var jarakHarian = 5; // Jarak harian dalam kilometer
    var waktu = 0; // Waktu dalam menit
    do {
        waktu += 60; // Menambahkan 60 menit (1 jam) ke waktu
        jarakTempuh -= jarakHarian;
    } while (jarakTempuh > 0);
    var jam = Math.floor(waktu / 60); // Menghitung jam
    var menit = waktu % 60; // Menghitung menit
    document.getElementById("hasilWaktu").innerHTML = "Anda akan mencapai tujuan berjalan kaki dalam " + jam + " jam " + menit + " menit.";
}

// Membuat fungsi yang menjumlahkan dua angka
const tambah = new Function("a", "b", "return a + b");
const hasilTambah = tambah(5, 3);
document.getElementById("hasilTambah").textContent = hasilTambah;
// Membuat fungsi yang mengalikan dua angka
const kali = new Function("a", "b", "return a * b");
const hasilKali = kali(4, 6);
document.getElementById("hasilKali").textContent = hasilKali;
// Membuat fungsi yang menghitung pangkat dua dari sebuah angka
const pangkatDua = new Function("a", "return a * a");
const hasilPangkatDua = pangkatDua(9);
document.getElementById("hasilPangkatDua").textContent = hasilPangkatDua;
