
showImg = function (e) {
    //var img = $(e).children().children().attr("src");
    var img = $(e).find("img").attr("src");
    $("#show_img").attr("src", img);
    $("#show_img_box").show();
};
closeShowImg = function () {
    $("#show_img_box").hide();
};
$(function () {
    html='';
    html+='<div id="show_img_box" class="show-img-box" onclick="closeShowImg()">';
    html+='<div class="img-box">';
    html+='<img id="show_img" />';
    html+='</div>';
    html += '</div>';
    $("body").append(html);
});