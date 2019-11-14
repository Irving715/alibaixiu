$('#logout').on('click', function () {
    alert('被点击了')
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
})