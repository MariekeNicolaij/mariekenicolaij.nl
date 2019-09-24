var body = $('.body');
var content = $('.content');
var page_button = $('.page-button');
var current_page_number = 0;
var pages = {
    'html/home.html': 0,
    'html/projects.html': 1,
    'html/education.html': 2,
    'html/work-experience.html': 3,
    'html/contact.html': 4
};

page_button.click(function (data) {
    var content_to_load = data.target.getAttribute('data-content-to-load');

    if (pages[content_to_load] === current_page_number)
        return;

    var next_page_number = pages[content_to_load];

    (current_page_number < next_page_number) ? animate_left(content_to_load) : animate_right(content_to_load);

    current_page_number = next_page_number;
});

function animate_left(content_to_load) {
    $.ajax({
        url: content_to_load,
        success: function (x) {
            content.animate({left: '-150%', opacity: '0'}, {
                duration: 750, easing: 'linear', complete: function () {

                    body.html(x);

                    content = $('.content');
                    page_button = $('.page-button');

                    content.animate({left: '150%', opacity: '0'}, {duration: 0});
                    content.animate({left: '0%', opacity: '1'}, {duration: 500, easing: 'linear'});
                }
            });
        }
    })
}

function animate_right(content_to_load) {
    $.ajax({
        url: content_to_load,
        success: function (x) {
            content.animate({left: '150%', opacity: '0'}, {
                duration: 750, easing: 'linear', complete: function () {

                    body.html(x);

                    content = $('.content');
                    page_button = $('.page-button');

                    content.animate({left: '-150%', opacity: '0'}, {duration: 0});
                    content.animate({left: '0%', opacity: '1'}, {duration: 500, easing: 'linear'});
                }
            });
        }
    })
}
