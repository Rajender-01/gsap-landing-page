const tl = gsap.timeline();

tl.from(".ntf", {
  y: -40,
  duration: 0.4,
  opacity: 0,
  delay: 0.4,
});

tl.from(".nav__logoCont", {
  y: -30,
  duration: 0.4,
  opacity: 0,
});

tl.from(".nav__menus", {
  y: -30,
  duration: 0.3,
  opacity: 0,
});

tl.from(".nav__btnCont", {
  y: -30,
  duration: 0.2,
  opacity: 0,
});

tl.from(".bnr__heading, .bnr__desc,  .bnr__btn", {
  y: -30,
  duration: 0.4,
  opacity: 0,
  stagger: 0.2,
  ease: "power1.out",
});

tl.from(
  ".bnr__imgCont",
  {
    x: 300,
    duration: 0.8,
    opacity: 0,
  },
  "-=0.7"
);
