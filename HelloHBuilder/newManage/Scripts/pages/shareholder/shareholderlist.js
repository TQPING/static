$(function () {


    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('Windows Phone') > -1) {
        //手机
        agentFlag = 0;
    } else {
        agentFlag = 1;
    }
    pholderlist.LoadData();
    pholderlist.loading();
})


var agentFlag = 0;//0,手机1:电脑
var page = 1;
var pholderlist = {
    Add: function () {
        window.location.href = "/Shareholder/AddOrEdit?CenterId=" + pholderlist.getQueryString("ID");
    },
    LoadData: function () {
        var Param = { ID: pholderlist.getQueryString("ID") };
        $("#infoPage").page({
            url: '/Shareholder/GetShareholderList',
            pageSize: 10,
            searchparam: Param,
            viewCallback: pholderlist.outList
        });
    },
    outList: function (result, j) {
        var html = '';
        $.each(result, function (i) {
            var itemData = result[i];
            html += `<tr>
                        <td style="text-align: center; width: 30%; ">`;
            if ( itemData.IdentitySignName  == "超级股东") {
                html += `<p style="color:red;    margin: 0px;"> ${itemData.Name} ${itemData.IdentitySignName}</p>`;
            } else {
                html += `<p  style="    margin: 0px;" >${itemData.Name}</p>`;
            }
            html += `</td>
                        <td style="text-align: center; width: 30%; ">${itemData.Phone}</td>
                        <td style="text-align: center; width: 30%; ">${itemData.OpenNum}</td>
                        <td style="text-align: center; width: 30%; "><a href="/Shareholder/Detail?ID=${itemData.Id}"> 详情 </a></td>
                    </tr>`
        });
        $('#data_body').html(html);
    },
    loading: function () {

    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return 1;
    }

}





