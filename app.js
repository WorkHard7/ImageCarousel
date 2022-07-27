const buttons = document
  .querySelectorAll(".carousel-button")
  .forEach((button) => {
    button.addEventListener("click", (e) => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1; // offset = if the dataset(carouselButton) of the button === 'next'. In case true = 1, otherwise = -1;
      // console.log(offset);

      const slides = button // looks for the closest element with dataset(data-carousel) near button, which is the div. From div selects element with dataset of data-slides. Which is the ul element
        .closest("[data-carousel]")
        .querySelector("[data-slides]"); // slides contains the ul element

      // console.log(slides);

      const activeSlide = slides.querySelector("[data-active]"); // from the ul above, selects the li with dataset of 'data-active'
      // console.log(activeSlide);
      let newIndex = [...slides.children].indexOf(activeSlide) + offset; // returns the element number with dataset 'activeSlide'

      // console.log(newIndex);

      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;

      // console.log(newIndex);
    });
  });
