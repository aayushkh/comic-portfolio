// (() => {
//     var bgArray = ['bluebg', 'greybg', 'redbg', 'yellowbg', 'orangebg', 'pinkbg', 'greenbg'];
//     var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
//     document.querySelector(".about.panel").classList.add(bg);
// })();

var siteW = window.innerWidth;
var siteH = window.innerHeight;

TweenMax.set(".site", { perspective: 5000 });
TweenMax.set(".container", { transformStyle: "preserve-3d",  transformOrigin: '-0% 50%' });
TweenMax.set(".closed", { rotationY: 90, z: -siteW/2, x: siteW/2 });

var timeLine = new TimelineMax();

document.querySelectorAll(".navOption").forEach(option => {
    let navOption = "." + option.dataset.nav;
    option.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");

        open[0].classList.add("closed");
        open[0].classList.remove("open");
        document.querySelector(navOption).classList.add("open");

        // timeLine
        // .to('.site', .5, { scale: 0.75, rotationZ: -5, ease: Power4.easeInOut }, "start")
        // .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power4.easeInOut }, "start+=0.7")
        // .to('.site', .5, { rotationZ: 0, scale: 1, ease: Power4.easeInOut }, "start+=1.2");

        timeLine
        .to('.site', .5, { scale: 0.75, ease: Power4.easeInOut }, "start")
        .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power4.easeInOut }, "start+=0.7")
        .to('.site', .5, { scale: 1, ease: Power4.easeInOut }, "start+=1.2");
    });
});

document.querySelectorAll(".back-arrow").forEach(back => {
    back.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");

        open[0].classList.add("closed");
        document.querySelector(".home").classList.add("open");
        open[0].classList.remove("open");

        timeLine.reverse();
        timeLine = new TimelineMax();
    });
});
