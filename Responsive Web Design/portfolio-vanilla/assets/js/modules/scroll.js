
export function initScrollReveal(ScrollReveal) {
  const delayEffect = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  /*SCROLL HOME*/
  delayEffect.reveal(".home__title", {});
  delayEffect.reveal(".button", { delay: 200 });
  delayEffect.reveal(".home__img", { delay: 400 });
  delayEffect.reveal(".home__social-icon", { interval: 200 });

  /*SCROLL ABOUT*/
  delayEffect.reveal(".about__img", {});
  delayEffect.reveal(".about__subtitle", { delay: 400 });
  delayEffect.reveal(".about__text", { delay: 400 });

  /*SCROLL SKILLS*/
  delayEffect.reveal(".skills__text", {});
  delayEffect.reveal(".skills__names", { interval: 200 });
  delayEffect.reveal(".skills__img", { delay: 600 });

  /*SCROLL WORK*/
  delayEffect.reveal("#projetos", { interval: 200 });
  delayEffect.reveal(".project", { interval: 300 });

  /*SCROLL EXPERIENCE*/
  delayEffect.reveal("#experiencias", { interval: 200 });
}