$('#file').on('change', function () {
    // console.log(this);
    let file = this.files[0];
    let formData = new FormData();
    formData.append('image', file);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formData,
        // 不处理个事
        processData: false,
        // 不处理类型
        contentType: false,
        success: function (response) {
            console.log(response[0].image);
            $('#image').val(response[0].image)
        }
    });
});
$('#slideForm').on('submit', function () {
    let formData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/slides",
        data: formData,
        success: function () {
            location.reload();
        }
    });
    return false;
});
$.ajax({
    type: "get",
    url: '/slides',
    success: function (response) {
        console.log(response);

        let html = template('slidesTpl', response);
        $('#slidesBox').html(html)
    }
});