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

// 处理时间格式
function formateDate(date) {
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}

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