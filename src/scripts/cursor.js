const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    ease: "elastic.out(1,0.3)",
    duration: 2,
    opacity: 0.6
  })
});
