document.getElementById("cocokan-btn").onclick = hitungPersentase;

function hitungPersentase() {
  const namaKamu = document.getElementById("nama-kamu").value;
  const namaDoi = document.getElementById("nama-doi").value;

  const persentase = Math.floor(Math.random() * 101); // Menghasilkan angka acak antara 0 dan 100
  event.preventDefault();

  const hasil = persentase + "%";

  document.getElementById("hasil").textContent = hasil;

  if (persentase <= 10 || persentase <= 20) {
    document.getElementById("statement").innerText =
      "sebaiknya kamu sadar diri";
    return;
  }
  if (persentase <= 21 || persentase <= 40) {
    document.getElementById("statement").innerText =
      "ada hati yang sedang dia jaga";
    return;
  }
  if (persentase <= 41 || persentase <= 60) {
    document.getElementById("statement").innerText = "Belum Pasti";
    return;
  }
  if (persentase <= 61 || persentase <= 80) {
    document.getElementById("statement").innerText = "Kalian Cocok";
    return;
  }
  if (persentase <= 81 || persentase <= 100) {
    document.getElementById("statement").innerText =
      "kalian pasangan seHidup seMati";
    return;
  }
}
