  const elements = document.querySelectorAll(".element");

  function checkVisibility() {
    const page = window.innerHeight * 0.9;
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < page) {
        element.classList.add("slide-in-left");
        element.classList.remove("hidden");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
