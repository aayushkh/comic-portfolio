window.onload = function() {
    let page = location.pathname;
    console.log(page);
    validPages = ['mystory', 'workxp', 'projects', 'contact'];
    if (validPages.includes(`/${page}`)) {
        // redirect
        console.log('redirecting');
        redirectTo(page);
    } else {
        // display 404 page
    }
}

function redirectTo(page) {

}