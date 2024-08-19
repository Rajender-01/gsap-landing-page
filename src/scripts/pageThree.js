gsap.from(".pixel__imgCont", {
  x: -300,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#pageThree",
    start: "top 75%",  
  },
});

gsap.from(".pixel__heading, .pixel__desc, .pixel__btn", {
  y: -30,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#pageThree",
    start: "top 75%",  
  },
});

gsap.from(".help__heading, .help__desc", {
  x: -300,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#pageThree",
    start: "top 15%",  
  },
});

gsap.from(".help__item", {
  x: 200,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#pageThree",
    start: "top 15%",  
  },
});