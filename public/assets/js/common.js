$('#logout').on('click', function () {
    var isConfirm = confirm('您真的要退出吗');
    if (isConfirm) {
        $.ajax({
            type: "post",
            url: "/logout",
            success: function () {
                location.href = 'login.html'
                // location.assign('index.html')
                // location.replace('login.html');
            },
            error: function () {
                alert('退出登录失败')
            }
        });
    }
});
// 处理时间格式
function formateDate(date) {
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
};
$.ajax({
    type: "get",
    url: '/users/' + userId,
    success: function (response) {
        $('.avatar').attr('src', response.avatar);
        $('.profile .name').html(response.nickName);
    }
});