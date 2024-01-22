// défilement lisse
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Script pour arreter la vidéo après avoir fermé la fenetre
$(document).ready(function () {
    $('.modal').each(function () {
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function () {

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });
});