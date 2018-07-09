$(function () {
    accountlist.LoadData();
});

var accountlist = {
    LoadData: function () {
        var Param = {};
        $("#infoPage").page({
            url: '/System/AccountLoadList',
            pageSize: 10,
            searchparam: Param,
            viewCallback: accountlist.outList
        });
    },
    outList: function (result, j) {
        var html = '';
        $.each(result, function (i) {
            j++;
            var itemData = result[i];
            html += '<tr>\
                    <td>' + j + '</td>\
                    <td style="">' + tools.nullToEmptyString(itemData.ManagerName) + '</td>\
                    <td style="">' + tools.nullToEmptyString(itemData.ManagerRealname) + '</td>\
                    <td style="">' + tools.nullToEmptyString(itemData.ManagerTel) + '</td>\
                    <td style="">' + tools.nullToEmptyString(itemData.ManagerEmail) + '</td>\
                    <td style="">' + tools.formatTime(itemData.CreateTime) + '</td>\
                    <td style="">' + tools.formatTime(itemData.UpdateTime) + '</td>\
                    <td style="">' + (itemData.ManagerStatus == 1 ? '启用':'禁用') + '</td>\
                    <td style=""><a href="/System/AccountEdit?accountid=' + itemData.ManagerId + '">编辑</a></td>\
                </tr>';
        });
        $('#accountbody').html(html);
    }
}