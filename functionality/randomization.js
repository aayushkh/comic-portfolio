// (() => {
//     var bgArray = ['bluebg', 'greybg', 'redbg', 'yellowbg', 'orangebg', 'pinkbg', 'greenbg'];
//     var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
//     document.querySelector(".about.panel").classList.add(bg);
// })();

var siteW = window.innerWidth;
var siteH = window.innerHeight;
var timeLine = new TimelineMax({onComplete:enableHeader});

TweenMax.set(".site", { perspective: 5000 });
TweenMax.set(".container", { transformStyle: "preserve-3d",  transformOrigin: '-0% 50%' });
TweenMax.set("aside", { rotationY: 90, z: -siteW/2, x: siteW/2 });

function enableHeader() {
    let openPanel = document.querySelectorAll("aside.open");
    if (openPanel[0] && openPanel[0].dataset.panel == "mystory") {
        document.querySelector("#mystory-header").classList.add("active");
        document.querySelector("#menu").classList.add("active");
    } else if (openPanel[0] && openPanel[0].dataset.panel == "workxp") {
        document.querySelector("#workxp-header").classList.add("active");
    } else if (openPanel[0] && openPanel[0].dataset.panel == "projects") {
        document.querySelector("#projects-header").classList.add("active");
    } else if (openPanel[0] && openPanel[0].dataset.panel == "contact") {
        document.querySelector("#contact-header").classList.add("active");
    } 
}

function innitializeFullPage() {
    let openPanel = document.querySelectorAll("aside.open");
    let openPanelName = openPanel[0].dataset.panel;
    console.log(openPanel[0].dataset.panel);
    
    new fullpage('#fullpage-' + openPanelName , {

        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
    
        licenseKey: 'FEC24492-659942EE-A7417337-1366E6FC',
        css3: true,
        fixedElements: ['#mystory-header', '#workxp-header', '#projects-header', '#contact-header']
    });

    fullpage_api.moveTo(1);
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);

}

function destroyFullpage() {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
    setTimeout(function() {
        fullpage_api.destroy('all')
    }, 1500);
}

document.querySelectorAll(".navOption").forEach(option => {
    let navOption = "." + option.dataset.nav;

    option.addEventListener('click', () => {
        let open = document.getElementsByClassName("open");

        open[0].classList.remove("open");
        document.querySelector(navOption).classList.add("open");

        innitializeFullPage();

        timeLine
        .to('.site', .5, { scale: 0.75, ease: Power4.easeInOut }, "start")
        .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power4.easeInOut }, "start+=0.7")
        .to('.site', .5, { scale: 1, ease: Power4.easeInOut }, "start+=1.2")
        .call(enableHeader);

        document.querySelector('#' + option.dataset.nav + '-header .back-arrow').style.display = "flex";
    });
});

document.querySelectorAll(".back-arrow").forEach(back => {
    back.addEventListener('click', () => {
        let openPanel = document.querySelectorAll("aside.open");
        panelName = ""
        if (openPanel[0]) {
            panelName = openPanel[0].dataset.panel;
        }

        back.style.display = "none";
        document.querySelector("#" + panelName + "-header").classList.remove("active");
        if (panelName == "mystory") {
            document.querySelector("#menu").classList.remove("active");
        }

        timeLine.reverse();
        timeLine = new TimelineMax();

        destroyFullpage();
    });
});
