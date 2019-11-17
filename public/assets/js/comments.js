$.ajax({
    type: "get",
    url: "/comments",
    success: function (response) {
        console.log(response);
        let html = template('commentsTpl', response);
        $('#commentsBox').html(html);
        let pageHTML = template('pageTpl', response);
        $('#pageBox').html(pageHTML);

    }
});


function changePage(page) {
    $.ajax({
        type: "get",
        url: "/comments",
        data: {
            page
        },
        success: function (response) {
            console.log(response);
            let html = template('commentsTpl', response);
            $('#commentsBox').html(html);
            let pageHTML = template('pageTpl', response);
            $('#pageBox').html(pageHTML);

        }
    });
};
$('#commentsBox').on('click', '.status', function () {
    var status = $(this).attr('data-status');
    var id = $(this).attr('data-id');
    $.ajax({
        type: "put",
        url: "/comments/" + id,
        data: {

            state: status == 0 ? 1 : 0
        },
        success: function () {
            location.reload();
        }
    });
    return
});
$('#commentsBox').on('click', '.delete', function () {
    if (confirm('是否删除')) {
        let id = $(this).attr('data-id');
        $.ajax({
            type: "delete",
            url: "/comments/" + id,
            success: function (response) {
                location.reload()
            }
        });
    }
})