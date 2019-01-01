// (() => {
//     var bgArray = ['bluebg', 'greybg', 'redbg', 'yellowbg', 'orangebg', 'pinkbg', 'greenbg'];
//     var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
//     document.querySelector(".about.panel").classList.add(bg);
// })();

document.querySelectorAll(".navOption").forEach(option => {
    let navOption = "." + option.dataset.nav;
    option.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");
        open[0].classList.add("closed");
        open[0].classList.remove("open");
        document.querySelector(navOption).classList.add("open");
    });
});

document.querySelectorAll(".back-arrow").forEach(back => {
    back.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");
        open[0].classList.add("closed");
        open[0].classList.remove("open");
        document.querySelector(".home").classList.add("open");
    });
});
