const div = document.querySelector('.price-range');
const ranges = document.querySelectorAll('.price-range input[type="range"]');
const numbers = document.querySelectorAll('.price-range input[type="number"]');

const div2 = document.querySelector('.price-range2');
const ranges2 = document.querySelectorAll('.price-range2 input[type="range"]');
const numbers2 = document.querySelectorAll(
  '.price-range2 input[type="number"]',
);

class Ranger {
  constructor(rangeFrom, rangeBefore, numberFrom, numberBefore) {
    this.rangeFrom = rangeFrom;
    this.rangeBefore = rangeBefore;
    this.numberFrom = numberFrom;
    this.numberBefore = numberBefore;
  }

  changeParam(min, max, step) {
    this.rangeFrom.min = min;
    this.rangeFrom.max = max;
    this.rangeFrom.step = step;

    this.rangeBefore.min = min;
    this.rangeBefore.max = max;
    this.rangeBefore.step = step;

    this.numberFrom.min = min;
    this.numberFrom.max = max;
    this.numberFrom.step = step;

    this.numberBefore.min = min;
    this.numberBefore.max = max;
    this.numberBefore.step = step;
  }
  updateRange() {
    this.numberFrom.addEventListener('change', () => {
      let numberFrom = +this.numberFrom.value;
      this.rangeFrom.value = numberFrom;
    });
    this.numberBefore.addEventListener('change', () => {
      let numberBefore = +this.numberBefore.value;
      this.rangeBefore.value = numberBefore;
    });
  }
  updateNumber() {
    this.rangeFrom.addEventListener('change', () => {
      let rangeFrom = +this.rangeFrom.value;

      this.numberFrom.value = rangeFrom;
    });
    this.rangeBefore.addEventListener('change', () => {
      let rangeBefore = +this.rangeBefore.value;

      this.numberBefore.value = rangeBefore;
    });
  }
  start(min, max, step) {
    this.changeParam(min, max, step);
    this.updateRange();
    this.updateNumber();
  }
}

const newRange = new Ranger(ranges[0], ranges[1], numbers[0], numbers[1]);
console.log(newRange);
newRange.start(10, 50, 10);

const newRange2 = new Ranger(ranges2[0], ranges2[1], numbers2[0], numbers2[1]);
newRange2.start(0, 5, 1);
