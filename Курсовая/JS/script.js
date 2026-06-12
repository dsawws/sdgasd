const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');


// Закрытие модалки
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = 'none';
};

// Обработчик клика по кнопке "Подробнее"
document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const model = card.dataset.model;
    const info = printers[model];

    modalTitle.textContent = model;
    modalDesc.innerHTML = `
      Тип: ${info.type}<br>
      Скорость: ${info.speed}<br>
      Разрешение: ${info.resolution}<br>
      Интерфейсы: ${info.interfaces}<br>
      Дополнительно: ${info.extra}
    `;
    modal.style.display = 'flex';
    const goBtn = document.getElementById("goToPage");
    goBtn.href = `printer.html?model=${model}`;
  });
});
