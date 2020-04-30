// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});




/*mixitup plugin*/
var mixer = mixitup('.work-col-4');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
