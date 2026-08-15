// =========================================================
// PARTENAIRES INSTITUTIONNELS — FENÊTRE MODALE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const trigger = document.querySelector(
        ".institutional-partners-trigger"
    );

    const modal = document.querySelector(
        "#institutional-partners-modal"
    );

    const closeButtons = document.querySelectorAll(
        "[data-modal-close]"
    );

    if (!trigger || !modal) {
        return;
    }

    function openModal() {

        modal.classList.add("is-open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }

    function closeModal() {

        modal.classList.remove("is-open");

        document.body.style.overflow = "";

        trigger.focus();

        modal.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    trigger.addEventListener(
        "click",
        openModal
    );

    trigger.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openModal();
            }
        }
    );

    closeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            closeModal
        );

    });

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("is-open")
            ) {

                closeModal();

            }

        }
    );

});

// =========================================================
// MENU MOBILE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector("#main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("is-open");

        const isOpen =
            navigation.classList.contains("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

    const navLinks = navigation.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});
// =========================================================
// PARTENAIRES PRIVÉS — FENÊTRE MODALE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const trigger = document.querySelector(
        ".private-partners-trigger"
    );

    const modal = document.querySelector(
        "#private-partners-modal"
    );

    const closeButtons = document.querySelectorAll(
        "[data-private-modal-close]"
    );


    if (!trigger || !modal) {
        return;
    }


    function openModal() {

        modal.classList.add("is-open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }

function closeModal() {

    document.activeElement.blur();

    trigger.focus();

    modal.classList.remove("is-open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}
trigger.addEventListener(
    "click",
    openModal
);

trigger.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openModal();

        }

    }
);

closeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            closeModal
        );

    }
);

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("is-open")
        ) {

            closeModal();

        }

    }
);

});
// =========================================================
// CARROUSEL COMBATTANTS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const carousel =
        document.querySelector(".fighters-carousel");

    if (!carousel) return;

    const track =
        carousel.querySelector(".fighters-track");

    const cards =
        carousel.querySelectorAll(".fighter-card");

    const previousButton =
        carousel.querySelector(".fighter-carousel-prev");

    const nextButton =
        carousel.querySelector(".fighter-carousel-next");

    const currentIndicator =
        document.querySelector(".fighter-current");

    const totalIndicator =
        document.querySelector(".fighter-total");

    if (
        !track ||
        !cards.length ||
        !previousButton ||
        !nextButton ||
        !currentIndicator ||
        !totalIndicator
    ) {
        console.error(
            "Éléments du carrousel des combattants manquants."
        );
        return;
    }

    let currentIndex = 0;

    const totalCards = cards.length;

    totalIndicator.textContent = totalCards;

    function updateCarousel() {

        const slideWidth =
            carousel.querySelector(
                ".fighters-carousel-window"
            ).offsetWidth;

        track.style.transform =
            `translateX(-${currentIndex * slideWidth}px)`;

        currentIndicator.textContent =
            currentIndex + 1;
    }

    nextButton.addEventListener("click", function () {

        currentIndex =
            (currentIndex + 1) % totalCards;

        updateCarousel();
    });

    previousButton.addEventListener("click", function () {

        currentIndex =
            (currentIndex - 1 + totalCards) % totalCards;

        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    updateCarousel();

});
// =========================================================
// COMPTE À REBOURS — EUROSAVATE 2026
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const daysElement =
        document.getElementById("countdown-days");


    if (!daysElement) {
        return;
    }


    // Date de l'événement
    const eventDate = new Date(
        "2026-12-19T18:00:00+01:00"
    );


    function updateCountdown() {

        const now = new Date();

        const difference =
            eventDate.getTime() - now.getTime();


        // L'événement est arrivé
        if (difference <= 0) {

            daysElement.textContent = "0";

            return;
        }


        const days =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );


        daysElement.textContent = days;

    }


    updateCountdown();


    // Mise à jour toutes les minutes
    setInterval(
        updateCountdown,
        60000
    );

});