function scrollTo(id) {
    $('.content-body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}

$(function() {
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

    $('.gallery img').click((e) => {
        $('.img-viewer-overlay').removeClass('hidden');

        let img = $(e.target);
        let imgSrc = img.attr('src');
        $('.img-viewer img').attr('src', imgSrc);
    });

    $('.img-viewer-overlay').click(() => {
        $('.img-viewer-overlay').addClass('hidden');
    });
});