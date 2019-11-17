$.ajax({
    type: "get",
    url: "/categories",
    success: function (response) {
        console.log(response);
        let html = template('categoryTpl', {
            data: response
        });
        $('#category').html(html);
    }
});
$('#feature').on('change', function () {
    var file = this.files[0];
    // 创建formdata对象  实现二进制文件上传
    var formData = new FormData();
    // 讲选择的文件追加到formdata对象中
    formData.append('cover', file);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formData,
        // 不要处理data属性对应参数
        processData: false,
        // 不要设置参数类型
        contentType: false,
        success: function (response) {
            console.log(response);
            $('#thumbnail').val(response[0].cover);
        }
    });
});
// 添加文章表单提交时
$('#addForm').on('submit', function () {
    // 获取表单中输入的内容
    var formData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/posts",
        data: formData,
        success: function () {
            // 跳转到文章列表页面
            location.href = '/admin/posts.html'
        }
    });
    return false;
});

// 获取浏览器地址栏中的id
let id = getUrlParams('id');
// 判断是否点击修改按钮(点击修改按钮会生成地址栏id 不会等于-1)
if (id != -1) {
    // 根据id获取文章详细信息
    $.ajax({
        type: "get",
        url: "/posts/" + id,
        success: function (response) {
            $.ajax({
                type: 'get',
                url: "/categories",
                success: function (categories) {
                    response.categories = categories;
                    console.log(response);
                    let html = template('modifyTpl', response);
                    $('#parentBox').html(html);
                }
            });
        }
    });
}

function getUrlParams(name) {
    let paramsAry = location.search.substr(1).split('&');

    for (let i = 0; i < paramsAry.length; i++) {
        let tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
            return tmp[1];
        }
    }
    return -1;
};
$('#parentBox').on('submit', '#modifyForm', function () {
    let formData = $(this).serialize();

    let id = $(this).attr('data-id');
    $.ajax({
        type: "put",
        url: "/posts/" + id,
        data: formData,
        success: function () {

            // location.href = '/admin/posts.html';
            location.replace('/admin/posts.html')
        }
    });
    return false;
})