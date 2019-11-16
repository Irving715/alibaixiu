$('#addCategory').on('submit', function () {
    let formData = $(this).serialize();

    $.ajax({
        type: "post",
        url: "/categories",
        data: formData,
        success: function () {
            location.reload()
        }
    })
    return false;
});
$.ajax({
    type: "get",
    url: "/categories",
    success: function (response) {
        var html = template('categoryListTpl', {
            data: response
        });
        $('#categoryBox').html(html);
    }
});
// 事件委托  要写谁触发点击事件
$('#categoryBox').on('click', '.edit', function () {
    var id = $(this).attr('data-id');

    $.ajax({
        type: "get",
        url: "/categories/" + id,
        success: function (response) {
            console.log(response);
            let html = template('modifyCategoryTpl', response);
            $('#formBox').html(html);
        }
    });
});
$('#formBox').on('submit', 'modifyCategory', function () {
    let formData = $(this).serialize();
    let id = $(this).attr('data-id');

    $.ajax({
        type: "put",
        url: "/categories/" + id,
        data: formData,
        success: function () {
            location.reload()
        }
    });
    return false;
});
$('#categoryBox').on('click', '.delete', function name(params) {
    if (confirm('是否删除')) {
        let id = $(this).attr('data-id');
        $.ajax({
            type: "delete",
            url: "/categories/" + id,
            success: function () {
                location.reload()
            }
        });
    }
})