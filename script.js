const accordionEl = document.querySelectorAll(".accordion");
accordionEl.forEach(accordion => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
        } else {
            accordionEl.forEach(item => {
                item.classList.remove("active");
            });
            accordion.classList.toggle("active");
        }
    });
});