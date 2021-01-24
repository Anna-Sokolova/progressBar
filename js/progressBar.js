const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const finishBtn = document.querySelector('.finishBtn');
const stepValue = [...document.querySelectorAll('.stepValue')];
const content = document.querySelector('.content');
// console.log(prevBtn, nextBtn, finishBtn, stepValue, content);

const MAX_VALUE = 4; // МАКС КОЛ-ВО ЭЛЕМЕНТОВ В МАССИВЕ (КОЛ-ВО КНОПОК)
let currentValue = 1;

nextBtn.addEventListener('click', () => {
  // console.log('next');
  let currentStep = stepValue[currentValue - 1];
  currentStep.classList.add('completed');
  currentValue += 1;
  content.textContent = `Текущий шаг ${currentValue}`;
  // console.log(currentStep);
  prevBtn.disabled = false;

  if (currentValue === MAX_VALUE) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
});

prevBtn.addEventListener('click', () => {
  console.log('previos');
  let currentStep = stepValue[currentValue - 2]; //ПОЛУЧАЕМ ПРЕДЫДУЩИЙ ИНДЕКС В МАССИВЕ ДЛЯ КНОПКИ 'НАЗАД'
  currentStep.classList.remove('completed');
  currentValue -= 1;
  content.innerText = `Текущий шаг ${currentValue}`;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if (currentValue === 1) {
    prevBtn.disabled = true;
  }
});

finishBtn.addEventListener('click', () => {
  console.log('finish');
  location.reload(); //СБРОСИТЬ К НАЧАЛЬНОМУ СОСТОЯНИЮ ДО ОБРАБОТКИ СОБЫТИЙ
});