let firstScreen = document.querySelector(".first");
let secondScreen = document.querySelector(".second");
let thirdScreen = document.querySelector(".third");

let height = window.innerHeight;

let firstScreenHeight = 1;
let secondScreenHeight = height / 2.5;
let thirdScreenHeight = 1;

let isFirstDown = true;
let isSecondDown = true;
let isThirdDown = true;

const checkDir = () => {
  // First screen check and reverse
  if (isFirstDown) {
    firstScreenHeight += 0.4;
  } else {
    firstScreenHeight -= 1;
  }

  if (firstScreenHeight > height) {
    isFirstDown = false;
  } else if (firstScreenHeight < 0) {
    isFirstDown = true;
  }

  // Second screen check and reverse
  if (isSecondDown) {
    secondScreenHeight += 0.7;
  } else {
    secondScreenHeight -= 1;
  }

  if (secondScreenHeight > height) {
    isSecondDown = false;
  } else if (secondScreenHeight < 0) {
    isSecondDown = true;
  }

  // Third screen check and reverse
  if (isThirdDown) {
    thirdScreenHeight += 0.5;
  } else {
    thirdScreenHeight -= 1;
  }

  if (thirdScreenHeight > height) {
    isThirdDown = false;
  } else if (thirdScreenHeight < 0) {
    isThirdDown = true;
  }
};

const update = () => {
  checkDir();

  // First screen animation
  gsap.to(firstScreen, {
    y: firstScreenHeight,
    duration: 0.1,
  });

  // Second screen animation using fromTo
  gsap.fromTo(
    secondScreen,
    { y: secondScreenHeight },
    {
      y: secondScreenHeight , // Animate slightly to add effect
      duration: 1,
    }
  );

  // Third screen animation
  gsap.to(thirdScreen, {
    y: thirdScreenHeight,
    duration: 2,
  });
};

const loop = () => {
  update();
  requestAnimationFrame(loop);
};

loop();