$('#userForm').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/users",
        data: "formData",
        success: function (response) {
            location.reload();
        },
        error: function () {
            alert('用户添加失败')
        }
    });
    return false;
});
$('#modifyBox').on('change', '#avatar', function () {

    var formData = new FormData();
    formData.append('avatar', this.files[0]);

    $.ajax({
        type: "post",
        url: "/upload",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);

            $('#preview').attr('src', response[0].avatar);
            $('#hiddenAvatar').val(response[0].avatar)
        }
    });
})