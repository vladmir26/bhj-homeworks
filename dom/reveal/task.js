const revealWindows = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
    revealWindows.forEach((revealWindow) => {
        const {top, bottom} = revealWindow.getBoundingClientRect();
        if (top < window.innerHeight) {
            revealWindow.classList.add("reveal_active");
        } else {
            revealWindow.classList.remove("reveal_active");
        }

        if (bottom < 0) {
            revealWindow.classList.remove("reveal_active");
        }
    })
})

