$.ajax({
    url: "html/home.html",
    success: function (x) {
        body.html(x);
        content = $('.content');
    }
});
