// (() => {
//     var bgArray = ['bluebg', 'greybg', 'redbg', 'yellowbg', 'orangebg', 'pinkbg', 'greenbg'];
//     var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
//     document.querySelector(".about.panel").classList.add(bg);
// })();

var siteW = window.innerWidth;
var siteH = window.innerHeight;
var timeLine = new TimelineMax({onComplete:enableHeader});

new fullpage('#fullpage', {
    licenseKey: 'FEC24492-659942EE-A7417337-1366E6FC',
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    css3: true,
    fixedElements: '#mystory-header'
});

fullpage_api.setAllowScrolling(false);
fullpage_api.setKeyboardScrolling(false);

TweenMax.set(".site", { perspective: 5000 });
TweenMax.set(".container", { transformStyle: "preserve-3d",  transformOrigin: '-0% 50%' });
TweenMax.set("aside", { rotationY: 90, z: -siteW/2, x: siteW/2 });

function enableHeader() {
    let openPanel = document.querySelectorAll("aside.open");
    if (openPanel[0] && openPanel[0].dataset.panel == "mystory") {
        document.querySelector("#mystory-header").classList.add("active");
    }
}

function fullpageProps() {
    let openPanel = document.querySelectorAll("aside.open");
    if (openPanel[0] && openPanel[0].dataset.panel == "mystory") {
        fullpage_api.moveTo(1);
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }

}

document.querySelectorAll(".navOption").forEach(option => {
    let navOption = "." + option.dataset.nav;

    option.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");

        open[0].classList.remove("open");
        document.querySelector(navOption).classList.add("open");

        timeLine
        .call(fullpageProps)
        .to('.site', .5, { scale: 0.75, ease: Power4.easeInOut }, "start")
        .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power4.easeInOut }, "start+=0.7")
        .to('.site', .5, { scale: 1, ease: Power4.easeInOut }, "start+=1.2")
        .call(enableHeader);
    });
});

document.querySelectorAll(".back-arrow").forEach(back => {
    back.addEventListener('click', () => {

        document.querySelector("#mystory-header").classList.remove("active");

        timeLine.reverse();
        timeLine = new TimelineMax();

        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    });
});
