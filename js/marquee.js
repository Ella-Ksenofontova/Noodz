document.addEventListener("DOMContentLoaded", () => {
  const marquees = document.querySelectorAll(".marquee__text-content");
  for (let marquee of marquees) {

    setInterval(() => {
      let currentText = marquee.textContent;
      const firstChar = currentText[0];
      if (firstChar === "*" && currentText[currentText.length - 1] === "*") {
        currentText = currentText.substring(1);
      } else {
        currentText = currentText.substring(1) + firstChar;
      }
      const isScrolledIntoView = marquee.getBoundingClientRect().top > 0 && marquee.getBoundingClientRect().bottom < innerHeight;
      if (isScrolledIntoView) marquee.textContent = currentText;
    }, 50)
  }
})

