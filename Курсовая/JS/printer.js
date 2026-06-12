const urlParams = new URLSearchParams(window.location.search);
const model = urlParams.get("model");


if (model && printers[model]) {
  document.getElementById("modelName").textContent = model;
  document.getElementById("modelType").textContent = printers[model].type;
  document.getElementById("modelSpeed").textContent = printers[model].speed;
  document.getElementById("modelResolution").textContent = printers[model].resolution;
  document.getElementById("modelInterfaces").textContent = printers[model].interfaces;
  document.getElementById("modelExtra").textContent = printers[model].extra;
  document.getElementById("modelDescription").textContent = printers[model].description;

  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const mainImg = document.createElement("img");
  mainImg.src = printers[model].images.main;
  mainImg.alt = model;
  carousel.appendChild(mainImg);

  printers[model].images.gallery.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = model;
    carousel.appendChild(img);
  });

  let index = 0;
  const totalImages = carousel.children.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateCarousel();
  });

} else {
  document.getElementById("printer-details").innerHTML = "<p>Модель не найдена</p>";
}