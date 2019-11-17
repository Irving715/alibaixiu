$.ajax({
    type: "get",
    url: "/posts",
    success: function (response) {
        console.log(response);
        let html = template("postsTpl", response);
        $("#postsBox").html(html);
        var page = template("pageTpl", response);
        $("#page").html(page);
    }
});



function changePage(page) {
    $.ajax({
        type: "get",
        url: "/posts",
        data: {
            page: page
        },
        success: function (response) {
            let html = template("postsTpl", response);
            $("#postsBox").html(html);
            let page = template("pageTpl", response);
            $('#page').html(page);
        }
    });
}

$.ajax({
    type: "get",
    url: "/categories",
    success: function (response) {
        console.log(response);
        let html = template("categoryTpl", {
            data: response
        });
        $("#categoryBox").html(html);
    }
});
$("#filterForm").on("submit", function () {
    let formData = $(this).serialize();

    $.ajax({
        type: "get",
        url: "/posts",
        data: formData,
        success: function (response) {
            let html = template("postsTpl", response);
            $("#postsBox").html(html);
            let page = template("pageTpl", response);
            $("#page").html(page);
        }
    });
    return false;
});
$('#postsBox').on('click', '.delete', function () {
    if (confirm('确定删除？')) {
        let id = $(this).attr('data-id');
        $.ajax({
            type: "delete",
            url: "/posts/" + id,
            success: function () {
                location.reload();
            }
        });
    }
})