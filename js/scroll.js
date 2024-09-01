let state = false;

const up = (element) => {
  let tl = gsap.timeline();
  tl.to(element, {
    top: 0,
  });
};

const down = (element) => {
  let tl = gsap.timeline();
  tl.to(element, {
    top: "90svh",
  });
};

moveUp = (elem) => {
  if (state) {
    up(elem);
    state = false; // Toggle state to false after the up animation
  } else {
    down(elem);
    state = true; // Toggle state to true after the down animation
  }
};
