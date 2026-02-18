const inputNama = document.querySelector(".input-nama");
const tombol = document.querySelector("#name button");
const textHalo = document.getElementById("sapa");

tombol.addEventListener("click", function () {
  const nama = inputNama.value;
  console.log(nama);
  textHalo.innerText = "Hello, " + nama + " Welcome to My Website!";
});
