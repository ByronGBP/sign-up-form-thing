
export function animateInput (input) {
  const TIME = 5;
  const MAX_ROUND = 5;
  const originalMargin = '0px';
  let intervalId = null;
  let margin = 0;
  let offset = 1;
  let rounds = 0;

  intervalId = setInterval(() => {
    console.log(originalMargin);
    if ((margin > 5 && offset > 0) || (margin < -5 && offset < 0)) {
      offset = -offset;
      rounds++;
    }
    margin += offset;
    input.style.marginLeft = margin + 'px';

    if (rounds > MAX_ROUND) {
      input.style.marginLeft = originalMargin;
      console.log(input.style.marginLeft);
      clearInterval(intervalId);
      intervalId = null;
    }
  }, TIME);
};
