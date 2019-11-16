$.ajax({
    type: "get",
    url: "/posts",
    success: function (response) {
        console.log(response);
        let html = template('postsTpl', response)
        $('#postsBox').html(html);


    }
});
// 处理时间格式
function formateDate(date) {
    date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}