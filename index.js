const description = document.querySelector('#project-description');

document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
        description.style.display = "flex";
        document.body.classList.add('no-scroll');
    });
});

document.querySelector("#project-description button").addEventListener("click", () => {
    description.style.display = "none";
    document.body.classList.remove('no-scroll');
});
