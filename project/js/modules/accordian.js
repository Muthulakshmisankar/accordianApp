export function initAccordion(updateIndicator) {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

 
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      const isActive = parent.classList.contains("active");

      // Close all accordion items
      accordionHeaders.forEach((item) => {
        item.parentElement.classList.remove("active");
      });

      if (!isActive) {
        parent.classList.add("active");
        const activeSection = header.id;
        updateIndicator(activeSection); // Call the function to update the indicator
      }
    });
  });
}
