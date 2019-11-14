$('#userForm').on('submit', function () {
    var formDate = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/users",
        data: "formDate",
        success: function (response) {
            location.reload();
        },
        error: function () {
            alert('用户添加失败')
        }
    });
    return false;
})