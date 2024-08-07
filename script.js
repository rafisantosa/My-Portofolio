function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
}
document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.querySelector(".title1");
  const p1Element = document.querySelector(".section__text__p11");
  // Menambahkan kelas visible setelah halaman dimuat
  setTimeout(() => {
    p1Element.classList.add("visible");
    titleElement.classList.add("visible");
  }, 100); // Delay kecil untuk memastikan animasi dimulai setelah halaman sepenuhnya dimuat
});

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("section__text__p2");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  // Fungsi untuk menampilkan huruf satu per satu
  function animateText() {
    textElement.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      textElement.appendChild(span);

      setTimeout(() => {
        span.classList.add("visible");
      }, 110 * index);
    });
  }

  // Mulai animasi dan atur interval untuk mengulang
  function startAnimation() {
    animateText();
    setInterval(animateText, 100 * text.length + 3000); // Sesuaikan waktu untuk mengulang
  }

  startAnimation();
});



