$('.content-image').click(function (data) {
    var content_to_load = data.target.getAttribute('data-content-to-load');
    window.open(content_to_load, '_blank');
});