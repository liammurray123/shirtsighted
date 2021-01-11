gsap.registerPlugin(ScrollTrigger);

gsap.set("#welcomeSection, #WelcomeText", { opacity: 0.0 });

gsap.from("#myTopnav", {
  duration: 2,
  y: -30,
  opacity: 0.1,
  ease: "power3.out",
});
gsap.to("#welcomeSection, #WelcomeText", {
  duration: 2,
  opacity: 1.0,
  ease: "power3.out",
});

gsap.from("#topSellerSection card", {
  scrollTrigger: "#topSellerSection",
  duration: 3,
  opacity: 0.0,
  // x: -20,
  stagger: 0.25,
  ease: "power3.out",
});
gsap.from("#whyBuySection card", {
  scrollTrigger: "#whyBuySection",
  duration: 3,
  opacity: 0.0,
  // x: -20,
  stagger: 0.25,
  ease: "power3.out",
});
