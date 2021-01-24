const div = document.querySelector('.price-range');
const ranges = document.querySelectorAll('input[type="range"]');
const numbers = document.querySelectorAll('input[type="number"]');
console.log(ranges, numbers);

function changeParam(el, min, max, step) {
  el.min = min;
  el.max = max;
  el.step = step;
}

ranges.forEach(el => {
  changeParam(el, 10, 50, 10);

  el.addEventListener('change', () => {
    let rangeFrom = +ranges[0].value;
    let rangeBefore = +ranges[1].value;

    numbers[0].value = rangeFrom;
    numbers[1].value = rangeBefore;
  });
});

numbers.forEach(el => {
  changeParam(el, 10, 50, 10);

  el.addEventListener('change', () => {
    let numberFrom = +numbers[0].value;
    let numberBefore = +numbers[1].value;

    ranges[0].value = numberFrom;
    ranges[1].value = numberBefore;
  });
});