
//点击内容不触发,阻止事件冒泡
    $(".modal-dialog").click(function(e) {
        e.stopPropagation();
    });

    //点击关闭
    $("#close").click(function() {
        $('#commitModal').css("display", 'none');
    });

    //点击取消
    $("#cancel").click(function() {
        $('#commitModal').css("display", 'none');
    });
    //点击确定
    $("#sure").click(function(){
        window.location.href='https://www.lanzous.com/ib5c8de'
    })
