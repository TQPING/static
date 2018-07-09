$(function () {
    rolelist.loadInfo();
});


var rolelist = {
    loadInfo: function () {
        var postData = {};
        $.post('/System/RoleLoadList', postData, function (result) {
            var data = result.data;
            var html = '';
            $.each(data, function (i) {
                var itemData = data[i];
                html += '<tr>\
                        <td>' + itemData.RoleName + '</td>\
                        <td>' + itemData.RoleStatus + '</td>\
                        <td>' + tools.formatTime(itemData.CreateTime) + '</td>\
                        <td align="center"><a href="/System/RoleEdit?roleid=' + itemData.RoleId + '">编辑</a></td>\
                    </tr>';
            });
            $('#roletbody').html(html);
        });
    }
};