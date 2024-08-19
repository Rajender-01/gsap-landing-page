gsap.from(".newsLetter__heading, .newsletter__btn", {
  y: -40,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#pageFour",
    start: "top 75%",  
  },
});