gsap.from(".client__heading, .client__desc, .client__logo", {
  y: -30,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '#pageTwo',
    start: 'top 85%'
  }
});

gsap.from(".community__heading, .community__desc", {
  y: -30,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: '#pageTwo',
    start: 'top 35%'
  }
});

gsap.from(".community__item", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '#pageTwo',
    start: 'top 10%'
  }
});

gsap.from(".community__item img, .community__item h3, .community__item p", {
  y: -30,
  duration: 0.3,
  scrollTrigger: {
    trigger: '#pageTwo',
    start: 'top 10%'
  }
});
