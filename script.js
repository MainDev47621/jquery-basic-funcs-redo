$(document).ready(() => {
    
    // Click events for the show(), hide() and toggle() function buttons
    $('#show-btn').on('click', () => {
        $('#img-one').show();
    });

    $('#hide-btn').on('click', () => {
        $('#img-one').hide();
    });

    $('#toggle-btn').on('click', () => {
        $('#img-one').toggle();
    });


    // Click events for the fadeIn(), fadeOut(), and fadeToggle() function buttons
    $('#fade-in-btn').on('click', () => {
        $('#img-two').fadeIn();
    });

    $('#fade-out-btn').on('click', () => {
        $('#img-two').fadeOut();
    });

    $('#fade-toggle-btn').on('click', () => {
        $('#img-two').fadeToggle();
    });

    // Click events for the slideDown(), slideUp(), and slideToggle() function buttons
    $('#slide-down-btn').on('click', () => {
        $('#img-three').slideDown();
    });

    $('#slide-up-btn').on('click', () => {
        $('#img-three').slideUp();
    });

    $('#slide-toggle-btn').on('click', () => {
        $('#img-three').slideToggle();
    });
});