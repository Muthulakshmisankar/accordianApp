export function updateIndicator(activeSection) {
    const indicatorList = document.querySelectorAll(".indicator-list li");
    indicatorList.forEach((item) => {
      if (item.textContent === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
