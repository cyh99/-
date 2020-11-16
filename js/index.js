$(function(){
    // 1.监听鼠标的点击事件
    $(".hot_click>li").click(function(){
        // 给点击的选项更改属性
        $(this).addClass("current");
        // 移出没被点击的对象属性
        $(this).siblings().removeClass("current");
        // 获取鼠标的点击对象
        var index = $(this).index();
        // 利用 index 找到对应的列表对象
        var $div = $(".click_show>div").eq(index);
        // 清楚除点击对象以外的显示属性
        $div.siblings().removeClass("show");
        // 给找到的对象添加属性
        $div.addClass("show");
    })

    // 2.监听鼠标的移入事件
    $(".onmouse_list").mouseenter(function(){
        $(this).siblings().children("div.item_info").removeClass("show");
        $(this).children("div.item_info").addClass("show");
    })

    // 只监听鼠标的移入不监听鼠标的移出可以避免出现鼠标移出后所有属性都消失的尴尬
    
    // 2.1监听鼠标的移出事件
//     $(".onmouse_list").mouseleave(function(){
//         $(this).children("div.item_info").removeClass("show");
//     })
})