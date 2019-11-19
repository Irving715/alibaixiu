let postId = getUrlParams('id');

let review;


$.ajax({
    type: "get",
    url: "/posts/" + postId,
    success: function (response) {
        console.log(response);
        let html = template('postTpl', response);
        $('#article').html(html)
        console.log(777777777);


    }
});
$('#article').on('click', '#like', function () {
    $.ajax({
        type: "post",
        url: "/posts/fabulous/" + postId,
        success: function () {
            console.log(777777777777);

            alert('点赞成功')
        }
    });
});
$.ajax({
    type: "get",
    url: "/settings",
    success: function (response) {
        review = response.review
        if (response.comment) {
            let html = template('commentTpl')
            $('#comment').html(html)
        }

    }
});
$('#comment').on('submit', 'form', function () {
    let content = $(this).find('textarea').val();
    let state;
    if (review) {
        state = 0
    } else {
        state = 1
    }
    $.ajax({
        type: "get",
        url: "/comments",
        data: {
            content: content,
            post: postId,
            state: state
        },
        success: function () {
            alert('评论成功')
            location.reload()
        },
        error: function () {
            alert('评论失败')
        }
    });
    return false
})