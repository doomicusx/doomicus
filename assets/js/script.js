gsap.fromTo(
  ".scroll1",
  {
    opacity: 0,
    delay: 2,
  },
  {
    scrollTrigger: {
      trigger: ".desc-container",
      start: "center center",
    },
    opacity: 1,
    duration: 3,
    ease: "power4.out",
  }
);

gsap.fromTo(
  ".scroll2",
  {
    opacity: 0,
    delay: 2,
  },
  {
    scrollTrigger: {
      trigger: ".topscroll",
      start: "center",
    },
    opacity: 1,
    duration: 3,
    ease: "power4.out",
  }
);

gsap.fromTo(
  ".scroll3",
  {
    opacity: 0,
    delay: 2,
  },
  {
    scrollTrigger: {
      trigger: ".topscroll2",
      start: "center",
    },
    opacity: 1,
    duration: 3,
    ease: "power4.out",
  }
);
