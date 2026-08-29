document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("open");
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("open");
            });
        });
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(function (element) {
        observer.observe(element);
    });
});
