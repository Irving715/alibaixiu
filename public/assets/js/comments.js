$.ajax({
    type: "get",
    url: "/comments",
    success: function (response) {
        console.log(response);
        let html = template('commentsTpl', response);
        $('#commentsBox').html(html);
        let pageHTML = template('pageTpl', response);
        $('#pageBox').html(pageHTML);

    }
});
// 处理时间格式
function formateDate(date) {
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
};

function changePage(page) {
    $.ajax({
        type: "get",
        url: "/comments",
        data: {
            page
        },
        success: function (response) {
            console.log(response);
            let html = template('commentsTpl', response);
            $('#commentsBox').html(html);
            let pageHTML = template('pageTpl', response);
            $('#pageBox').html(pageHTML);

        }
    });
}