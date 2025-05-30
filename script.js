document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.2 });

    const target = document.querySelector(".right");
    if (target) observer.observe(target);
  });
