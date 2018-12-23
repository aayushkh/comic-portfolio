(function() {
    var bgArray = ['bluebg', 'greybg', 'redbg', 'yellowbg', 'orangebg', 'pinkbg', 'greenbg'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    document.querySelector(".about.panel").classList.add(bg);
})();

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".navOption .navItem").addEventListener('click',function () {
        console.log("hello");
    });
});