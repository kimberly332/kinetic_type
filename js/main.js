(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button'),
      typeAnim = gsap.timeline({paused: true});

  typeAnim.to("#you", {opacity: 1, duration: 0.25})
          .to("#wanna", {opacity: 1, duration: 0.3})
          .to("#play", {opacity: 1, duration: 0.5})
          .to("#typewrapper", {rotate: -90, scaleX: 1.5, scaleY: 1.5, opacity: 1});

  function playAnimation() {
    typeAnim.play();
    audio.play();
  }

  playButton.addEventListener("click", playAnimation);

})();
