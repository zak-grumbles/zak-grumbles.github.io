function scrollTo(id) {
    $('.content-body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}

$('#sidebar-about').click(() => {
    scrollTo('#about');
});

$('#sidebar-projects').click(() => {
    scrollTo('#projects');
});

$('#sidebar-contact').click(() => {
    scrollTo('#contact');
});

$('#sidebar-github').click(() => {
    window.open('https://github.com/zak-grumbles', '_blank');
});